'use client'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'
import { authValidate } from '@/common/validate'
import { authErrors } from '@/common/constants/errors/auth'
import { setCookie } from 'cookies-next';

// Constants
import { pages } from '@/common/constants'

// Hooks
import { ChangeEvent, useState } from 'react'
import { useRequest } from '@/shared/hooks/useClientRequest'
import { useRouter } from 'next/navigation'

// Components
import { Button, Input } from '@ui/index'
import { AuthWrapper } from '@/processes/auth/wrapper'
import { Attention } from '@/processes/auth/wrapper/ui/Attention'

type SignUpDTO = {
  login: string
  email: string
  password: string
  repeatPassword: string
}

function Component() {
  const [data, setData] = useState<SignUpDTO>({
    login: "", email: "", password: "", repeatPassword: ""
  })
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
    const [passwordIsValid, loginIsValid, emailIsValid] = [
      authValidate.isValidPassword(data.password),
      authValidate.isValidLogin(data.login),
      authValidate.isValidEmail(data.email)
    ]
    
    if (!loginIsValid) {
      return setError(authErrors.INVALID_USERNAME);
    } else if (!emailIsValid) {
      return setError(authErrors.INVALID_EMAIL)
    } else if (!passwordIsValid) {
      return setError(authErrors.INVALID_PASSWORD);
    } else if (data.password !== data.repeatPassword) {
      return setError(authErrors.INVALID_REPEAT_PASSWORD);
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
    >('/authorization/sign-up', "POST", {
      body: {
        username: data.login,
        password: data.password,
        email: data.email
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

  return <AuthWrapper onSubmit={submit} title={(
    <span data-gradient>Регистрация</span>
  )} error={error} setError={setError}>
    <Input
      value={data.login}
      placeholder="Логин"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e, "login")
      }}
    />
    <Input
      value={data.email}
      placeholder="E-mail"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e, "email")
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
    <Input
      type="password"
      value={data.repeatPassword}
      placeholder="Повторите пароль"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e, "repeatPassword")
      }}
    />
    <Button
      disabled={loading}
      content="Создать аккаунт"
      type="white"
      big
    />
    <Attention
      title="Есть аккаунт?"
      linkName="Войти"
      link={pages.get({ name: "sign-in" }).path}
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