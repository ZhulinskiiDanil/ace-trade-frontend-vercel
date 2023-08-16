'use client'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'
import { authValidate } from '@/common/validate'

// Hooks
import { ChangeEvent, useState } from 'react'

// Components
import { Button, Input } from '@ui/index'
import { AuthWrapper } from '@/processes/auth/wrapper'
import { ButtonsWrapper } from '@/processes/auth/wrapper/ui/ButtonsWrapper'

interface IData {
  email: string
}

function Component() {
  const [data, setData] = useState<IData>({ email: "" })

  function changeValue(
    e: ChangeEvent<HTMLInputElement>,
    valueName: string
  ) {
    setData(pre => ({ ...pre, [valueName]: e.target.value }))
  }

  function submit() {
    const [emailIsValid] = [
      authValidate.isValidEmail(data.email)
    ]
    
    if (!emailIsValid) {
      console.log("Email invalid");
    } else {
      console.log("Success");
    }
  }

  return <AuthWrapper onSubmit={submit} title={<>
    Восстановление <span data-gradient>пароля</span>
  </>}>
    <Input
      value={data.email}
      placeholder="Почта"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e, "email")
      }}
    />
    <ButtonsWrapper>
      <Button
        content="Подтвердить"
        type="white"
        fullWidth big
      />
      <Button
        content="Отправить снова"
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