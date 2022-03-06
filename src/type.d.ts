type Section = {
  id: string
  type: string
  text: string
}

interface Form {
  id: string
  header: string
  form: Section[]
}

type FormState = {
  forms: Form[]
}

type AnyType = Form | Form[]

type FormAction = {
  type: string
  payload: AnyType<Form, Form[]>
}

type DispatchType = (args: FormAction) => FormAction
