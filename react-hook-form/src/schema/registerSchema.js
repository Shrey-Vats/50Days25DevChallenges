import {z} from 'zod'

export const resigterSchema = z.object({
    name: z
        .string()
        .min(3, "bhai sayad naam ki short form likh gai hai")
        .max(20, "O M G what a danger name. bhai jarai surname hataikar try karoa ")
        .regex(/^[A-Za-z]+([ '-][A-Za-z]+)*$/, {message: "mujai tairahai papa and mummy ji sai mil nai hai hai jinonai aap kaa yai badhyai naam rakha hai 🙄"}),
    email: z
        .string()
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {message: "Galat Email daikar aapnai aap ko badha 30 mar khan samaj rahai hai 🤣"}),
    password: z
        .string()
        .min(8, "oo Bhai password bhauth chota hai, aapna thoda sai badh kar lai varna nahi ja paiga")
        .max(20, "Kya sochkar kar rahai hai bhai tujai password bhi yad rahai ga 😎")
})