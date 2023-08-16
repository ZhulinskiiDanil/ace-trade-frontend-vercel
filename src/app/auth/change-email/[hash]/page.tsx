'use client'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'

// Components
import { Button } from '@ui/index'
import { AuthWrapper } from '@/processes/auth/wrapper'
import { ButtonsWrapper } from '@/processes/auth/wrapper/ui/ButtonsWrapper'

function Component() {
  function submit() {
    console.log("Success");
  }

  return <AuthWrapper onSubmit={submit} title={<>
    Подтвердить смену <span data-gradient>почты</span>
  </>} warning="Возможно кто-то другой попытался изменить вашу почту в целях забрать аккаунт себе, если это не вы, отмените смену почты">
    <ButtonsWrapper>
      <Button
        content="Подтвердить"
        type="white"
        fullWidth big
      />
      <Button
        content="Отмена"
        semantic={false}
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