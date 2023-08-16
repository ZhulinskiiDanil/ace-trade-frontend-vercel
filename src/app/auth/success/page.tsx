'use client'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'
import { authValidate } from '@/common/validate'

// Hooks
import { ChangeEvent, useState } from 'react'

// Components
import { Button } from '@ui/index'
import { AuthWrapper } from '@/processes/auth/wrapper'
import { ButtonsWrapper } from '@/processes/auth/wrapper/ui/ButtonsWrapper'

interface IData {
  login: string
  password: string
}

function Component() {
  const [data, setData] = useState<IData>({ login: "", password: "" })

  function changeValue(
    e: ChangeEvent<HTMLInputElement>,
    valueName: string
  ) {
    setData(pre => ({ ...pre, [valueName]: e.target.value }))
  }

  function submit() {
    const [passwordIsValid, loginIsValid] = [
      authValidate.isValidPassword(data.password),
      authValidate.isValidLogin(data.login)
    ]
    
    if (!loginIsValid) {
      console.log("Login invalid");
    } else if (!passwordIsValid) {
      console.log("Password invalid");
    } else {
      console.log("Success");
    }
  }

  return <AuthWrapper onSubmit={submit} title={<>
    Мы отправили письмо на вашу <span data-gradient>почту</span>
  </>}>
    <ButtonsWrapper>
      <Button
        content="Изменить почту"
        type="white"
        fullWidth big
      />
    </ButtonsWrapper>
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