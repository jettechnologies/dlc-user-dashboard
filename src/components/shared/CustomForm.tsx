"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import {
	FormControl,
	FormDescription,
	FormField as ShadcnFormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { type VariantProps } from "class-variance-authority"
import { ReactNode } from "react"
import {
	useForm,
	FormProvider,
	SubmitHandler,
	type DefaultValues
} from "react-hook-form"
import { z, ZodTypeAny } from "zod"

/* eslint-disable @typescript-eslint/no-explicit-any */

export type FormField<T> = {
	name: keyof T
	label: string
	description?: string
	render: (control: any) => ReactNode
	zodType: ZodTypeAny
}

interface SubmitButtonProps extends VariantProps<typeof buttonVariants> {
	className?: string
	children: ReactNode
}

type FormProps<T extends z.ZodTypeAny> = {
	schema: T
	fields: FormField<z.infer<T>>[]
	onSubmit: SubmitHandler<z.infer<T>>
	children?: ReactNode
	defaultValues?: DefaultValues<z.infer<T>>
}

// Compound components
export const CustomForm = {
	Root: <T extends z.ZodTypeAny>({
		schema,
		fields,
		onSubmit,
		children,
		defaultValues
	}: FormProps<T>) => {
		const form = useForm<z.infer<T>>({
			resolver: zodResolver(schema),
			defaultValues
		})

		return (
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					{fields.map((field) => (
						<CustomForm.Field
							key={field.name as string}
							name={field.name as string}
							label={field.label}
							description={field.description}
						>
							{field.render(form.control)}
						</CustomForm.Field>
					))}
					{children}
				</form>
			</FormProvider>
		)
	},
	Field: ({
		name,
		label,
		description,
		children
	}: {
		name: string
		label: string
		description?: string
		children: React.ReactNode
	}) => {
		return (
			<ShadcnFormField
				name={name}
				render={({ field }) => (
					<FormItem {...field}>
						<FormLabel>{label}</FormLabel>
						<FormControl>{children}</FormControl>
						{description && <FormDescription>{description}</FormDescription>}
						<FormMessage />
					</FormItem>
				)}
			/>
		)
	},
	Submit: ({ children, className, ...props }: SubmitButtonProps) => {
		return (
			<Button className={className} {...props} type="submit">
				{children}
			</Button>
		)
	}
}
