const toStr = (val: any): string => String(val || '')

export const authValidate = {
  isValidPassword(value: any): boolean {
    return !!toStr(value)
      .match(/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d_\-!@#$%^&*]{8,256}$/g)
  },
  isValidLogin(value: any): boolean {
    return !!toStr(value)
      .match(/[A-Za-z\d_]{2,32}$/g)
  },
  isValidEmail(value: any): boolean {
    return !!toStr(value)
      .match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
}