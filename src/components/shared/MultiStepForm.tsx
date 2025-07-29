"use client"

import { Button } from "@/components/ui/button"
import {
	FormControl,
	FormDescription,
	FormField as ShadcnFormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { ReactNode, useState } from "react"
import {
	useForm,
	FormProvider,
	SubmitHandler,
	UseFormReturn,
	DefaultValues
} from "react-hook-form"
import { z, ZodTypeAny } from "zod"

/* eslint-disable @typescript-eslint/no-explicit-any */

// Extended types for multi-step forms
type FormStep<T> = {
	title: string
	description?: string
	fields: FormField<T>[]
}

type FormField<T> = {
	name: keyof T
	label: string
	description?: string
	render: (control: any, form: UseFormReturn<z.infer<ZodTypeAny>>) => ReactNode
	zodType: ZodTypeAny
}

type MultiStepFormProps<T extends z.ZodTypeAny> = {
	schema: T
	steps: FormStep<z.infer<T>>[]
	onSubmit: SubmitHandler<z.infer<T>>
	// defaultValues?: Partial<z.infer<T>>
	defaultValues?: DefaultValues<z.infer<T>>
	children?: (props: {
		currentStep: number
		totalSteps: number
		nextStep: () => void
		prevStep: () => void
		isFirstStep: boolean
		isLastStep: boolean
		form: UseFormReturn<z.infer<T>>
	}) => ReactNode
}

// Compound components
const Form = {
	Root: <T extends z.ZodTypeAny>({
		schema,
		steps,
		onSubmit,
		children,
		defaultValues
	}: MultiStepFormProps<T>) => {
		const form = useForm<z.infer<T>>({
			resolver: zodResolver(schema),
			defaultValues,
			mode: "onChange"
		})

		const [currentStep, setCurrentStep] = useState(0)
		const totalSteps = steps.length

		const nextStep = () => {
			if (currentStep < totalSteps - 1) {
				setCurrentStep(currentStep + 1)
			}
		}

		const prevStep = () => {
			if (currentStep > 0) {
				setCurrentStep(currentStep - 1)
			}
		}

		const isFirstStep = currentStep === 0
		const isLastStep = currentStep === totalSteps - 1

		return (
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<div className="mb-6">
						<h2 className="text-xl font-semibold">
							{steps[currentStep].title}
						</h2>
						{steps[currentStep].description && (
							<p className="text-muted-foreground">
								{steps[currentStep].description}
							</p>
						)}
					</div>

					<div className="space-y-6">
						{steps[currentStep].fields.map((field) => (
							<Form.Field
								key={field.name as string}
								name={field.name as string}
								label={field.label}
								description={field.description}
							>
								{field.render(form.control, form)}
							</Form.Field>
						))}
					</div>

					{children?.({
						currentStep,
						totalSteps,
						nextStep,
						prevStep,
						isFirstStep,
						isLastStep,
						form
					})}
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
		children: ReactNode
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
	Submit: ({ children }: { children: ReactNode }) => {
		return <Button type="submit">{children}</Button>
	},
	Navigation: ({
		isFirstStep,
		isLastStep,
		onNext,
		onPrev,
		onSubmit
	}: {
		isFirstStep: boolean
		isLastStep: boolean
		onNext: () => void
		onPrev: () => void
		onSubmit: () => void
	}) => {
		return (
			<div className="flex justify-between mt-8">
				{!isFirstStep ? (
					<Button type="button" variant="outline" onClick={onPrev}>
						Back
					</Button>
				) : (
					<div /> // Empty div for spacing
				)}

				{!isLastStep ? (
					<Button type="button" onClick={onNext}>
						Next
					</Button>
				) : (
					<Button type="button" onClick={onSubmit}>
						Submit
					</Button>
				)}
			</div>
		)
	}
}

// Example usage
const userSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters."
	}),
	email: z.string().email(),
	age: z.number().min(18),
	address: z.string().optional(),
	newsletter: z.boolean().default(false)
})

export function MultiStepUserForm() {
	const handleSubmit = (values: z.infer<typeof userSchema>) => {
		console.log(values)
	}

	const steps: FormStep<z.infer<typeof userSchema>>[] = [
		{
			title: "Personal Information",
			description: "Tell us about yourself",
			fields: [
				{
					name: "username",
					label: "Username",
					description: "This is your public display name.",
					zodType: z.string(),
					render: (control) => <Input {...control} />
				},
				{
					name: "email",
					label: "Email",
					zodType: z.string(),
					render: (control) => <Input type="email" {...control} />
				}
			]
		},
		{
			title: "Additional Details",
			fields: [
				{
					name: "age",
					label: "Age",
					zodType: z.number(),
					render: (control, form) => (
						<Input
							type="number"
							{...control}
							onChange={(e) => {
								const value = parseInt(e.target.value)
								form.setValue("age", isNaN(value) ? 0 : value)
							}}
						/>
					)
				},
				{
					name: "address",
					label: "Address",
					zodType: z.string(),
					render: (control) => <Input {...control} />
				}
			]
		},
		{
			title: "Preferences",
			fields: [
				{
					name: "newsletter",
					label: "Subscribe to newsletter",
					zodType: z.boolean(),
					render: (control) => (
						<input
							type="checkbox"
							checked={control.value}
							onChange={(e) => control.onChange(e.target.checked)}
							className="mr-2"
						/>
					)
				}
			]
		}
	]

	return (
		<Form.Root schema={userSchema} steps={steps} onSubmit={handleSubmit}>
			{({
				currentStep,
				totalSteps,
				nextStep,
				prevStep,
				isFirstStep,
				isLastStep,
				form
			}) => (
				<>
					<div className="mb-4">
						Step {currentStep + 1} of {totalSteps}
					</div>

					<Form.Navigation
						isFirstStep={isFirstStep}
						isLastStep={isLastStep}
						onNext={() => {
							// Validate current step fields before proceeding
							const stepFields = steps[currentStep].fields.map((f) => f.name)
							form.trigger(stepFields as any).then((isValid) => {
								if (isValid) nextStep()
							})
						}}
						onPrev={prevStep}
						onSubmit={form.handleSubmit(handleSubmit)}
					/>
				</>
			)}
		</Form.Root>
	)
}
