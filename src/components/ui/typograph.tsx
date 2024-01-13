import { cn } from '@/lib/utils';

interface TypographyProps<T> extends React.HTMLAttributes<T> {
	className?: string;
}

export function TypographyH1({
	className,
	...props
}: TypographyProps<HTMLHeadingElement>) {
	return (
		<h1
			className={cn(
				'mb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
				className
			)}
			{...props}
		/>
	);
}

export function TypographyH2({
	className,
	...props
}: TypographyProps<HTMLHeadingElement>) {
	return (
		<h2
			className={cn(
				'mb-2 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
				className
			)}
			{...props}
		/>
	);
}

export function TypographyH3({
	className,
	...props
}: TypographyProps<HTMLHeadingElement>) {
	return (
		<h3
			className={cn(
				'mb-2 scroll-m-20 text-2xl font-semibold tracking-tight',
				className
			)}
			{...props}
		/>
	);
}

export function TypographyH4({
	className,
	...props
}: TypographyProps<HTMLHeadingElement>) {
	return (
		<h4
			className={cn(
				'mb-2 scroll-m-20 text-xl font-semibold tracking-tight',
				className
			)}
			{...props}
		/>
	);
}

export function TypographyP({
	className,
	...props
}: TypographyProps<HTMLParagraphElement>) {
	return (
		<p
			className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
			{...props}
		/>
	);
}

export function TypographyLead({
	className,
	...props
}: TypographyProps<HTMLParagraphElement>) {
	return (
		<p
			className={cn('text-xl text-muted-foreground', className)}
			{...props}
		/>
	);
}

export function TypographyLarge({
	className,
	...props
}: TypographyProps<HTMLDivElement>) {
	return (
		<div
			className={cn('text-lg font-semibold', className)}
			{...props}
		/>
	);
}

export function TypographySmall({
	className,
	...props
}: TypographyProps<HTMLElement>) {
	return (
		<small
			className={cn('text-sm font-medium leading-none', className)}
			{...props}
		/>
	);
}

export function TypographyMuted({
	className,
	...props
}: TypographyProps<HTMLParagraphElement>) {
	return (
		<p
			className={cn('text-sm text-muted-foreground', className)}
			{...props}
		/>
	);
}
