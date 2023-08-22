import * as yup from "yup";

export const formValidationSchema = yup.object({
    name:yup.string().required().min(3),
    phone:yup.string().required().matches(/(\/+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/g , "Phone Number Is Not correct")

})
export const phoneValidationSchema = yup.object({
    phone:yup.string().required().matches(/(\/+98|0|98|0098)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/g , "Phone Number Is Not correct")
})

export const codeValidationSchema = yup.object({
    code:yup.string().required().min(6)
})