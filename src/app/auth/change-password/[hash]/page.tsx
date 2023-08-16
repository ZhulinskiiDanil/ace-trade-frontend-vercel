'use client'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'
import { authValidate } from '@/common/validate'

// Hooks
import { ChangeEvent, useState } from 'react'

// Components
import { Button, Input } from '@ui/index'
import { AuthWrapper } from '@/processes/auth/wrapper'

interface IData {
  password: string
  repeatPassword: string
}

function Component() {
  const [data, setData] = useState<IData>({
    password: "", repeatPassword: ""
  })

  function changeValue(
    e: ChangeEvent<HTMLInputElement>,
    valueName: string
  ) {
    setData(pre => ({ ...pre, [valueName]: e.target.value }))
  }

  function submit() {
    const [passwordIsValid] = [
      authValidate.isValidPassword(data.password)
    ]
    
    if (!passwordIsValid) {
      console.log("Password invalid");
    } else if (data.password !== data.repeatPassword) {
      console.log("Repeat password invalid");
    } else {
      console.log("Success");
    }
  }

  return <AuthWrapper onSubmit={submit} title={<>
    Изменить <span data-gradient>пароль</span>
  </>}>
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
      content="Подтвердить"
      type="white"
      big
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