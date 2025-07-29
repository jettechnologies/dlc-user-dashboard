"use client"

import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from "@/components/ui/dialog"

interface DeleteModalProps {
	isOpen: boolean
	onClose: () => void
	onConfirm: () => void
	itemName: string
	isLoading?: boolean
}

export function DeleteModal({
	isOpen,
	onClose,
	onConfirm,
	itemName,
	isLoading = false
}: DeleteModalProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader className="text-center">
					<DialogTitle className="text-2xl font-bold text-center text-gray-900">
						Delete
					</DialogTitle>
				</DialogHeader>

				<DialogDescription className="text-center text-gray-700 text-base leading-relaxed px-4 py-6">
					Are you sure you want to delete {itemName} ? This action cannot be
					undone.
				</DialogDescription>

				<DialogFooter className="flex justify-center gap-4 pt-4">
					<Button
						variant="secondary"
						onClick={onClose}
						disabled={isLoading}
						className="px-8 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg"
					>
						Cancel
					</Button>
					<Button
						variant="destructive"
						onClick={onConfirm}
						disabled={isLoading}
						className="px-8 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg"
					>
						{isLoading ? "Deleting..." : "Delete"}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
