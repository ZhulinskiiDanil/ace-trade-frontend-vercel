'use client'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'
import { authValidate } from '@/common/validate'
import { setCookie } from 'cookies-next'

// Constants
import { pages } from '@/common/constants'
import { authErrors } from '@/common/constants/errors/auth'

// Hooks
import { ChangeEvent, useState } from 'react'
import { useRequest } from '@/shared/hooks/useClientRequest'
import { useRouter } from 'next/navigation'

// Components
import { Button, Input } from '@ui/index'
import { AuthWrapper } from '@/processes/auth/wrapper'
import { Attention } from '@/processes/auth/wrapper/ui/Attention'

interface IData {
  login: string
  password: string
}

function Component() {
  const [data, setData] = useState<IData>({ login: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [request] = useRequest()
  const router = useRouter()

  function changeValue(
    e: ChangeEvent<HTMLInputElement>,
    valueName: string
  ) {
    setData(pre => ({ ...pre, [valueName]: e.target.value }))
  }

  async function submit() {
    setError('')
    const [passwordIsValid, loginIsValid] = [
      authValidate.isValidPassword(data.password),
      authValidate.isValidLogin(data.login)
    ]

    if (!loginIsValid) {
      return setError(authErrors.INVALID_USERNAME);
    } else if (!passwordIsValid) {
      return setError(authErrors.INVALID_PASSWORD);
    }

    type SignInError = {
      code: keyof typeof authErrors,
      message: string
    }

    type SignInResponse = {
      token: string
    }

    setLoading(true)
    const response = await request<
      Partial<SignInError> & Partial<SignInResponse>
    >('/authorization/sign-in', "POST", {
      body: {
        login: data.login,
        password: data.password
      }
    })
    setLoading(false)

    if (response) {
      const token = response?.token || null
      const error = response?.code ? authErrors[response?.code] : null

      if (error) {
        setError(error)
      } else if (token) {
        setCookie('authorization', token, { maxAge: 60 * 6 * 24 });
        
        router.push(pages.get({ name: "profile" }).path)
      }
    }
  }

  return <AuthWrapper onSubmit={submit} title={<>
    <span data-gradient>Вход</span> в аккаунт
  </>} error={error} setError={setError}>
    <Input
      value={data.login}
      placeholder="Логин"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e, "login")
      }}
    />
    <Input
      type="password"
      value={data.password}
      placeholder="Пароль"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e, "password")
      }}
    />
    <Button
      disabled={loading}
      content="Войти в аккаунт"
      type="white"
      big
    />
    <Attention
      title="Нет аккаунта?"
      linkName="Зарегистрироваться"
      link={pages.get({ name: "sign-up" }).path}
    />
    <Attention
      title="Забыли пароль?"
      linkName="Восстановить"
      link={pages.get({ name: "forgot-password" }).path}
    />
  </AuthWrapper>
}

export default PageLayout(
  Component, {
    imports: [
      Header,
      Content,
      Footer
    ],
    settings: []
  }
)