// 21st.dev Component: Floating Header
// Source query: "nav minimal transparent"
// Date: 2026-04-29
// What we borrowed: pill-shaped centered floating nav with backdrop blur (top-5 z-50, max-w-3xl, rounded-lg, border, bg-background/95 + backdrop-blur-lg) — translated for an editorial luxury nav at the top of the McCormick's site. We kept the floating-pill geometry and shadow but swapped the radio-button logo for a serif "M" mark and Bodoni wordmark.

import React from 'react';
import { Grid2x2PlusIcon, MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{ label: 'Features', href: '#' },
		{ label: 'Pricing', href: '#' },
		{ label: 'About', href: '#' },
	];

	return (
		<header
			className={cn(
				'sticky top-5 z-50',
				'mx-auto w-full max-w-3xl rounded-lg border shadow',
				'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg',
			)}
		>
			<nav className="mx-auto flex items-center justify-between p-1.5">
				<div className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
					<Grid2x2PlusIcon className="size-5" />
					<p className="font-mono text-base font-bold">Asme</p>
				</div>
				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link) => (
						<a className={buttonVariants({ variant: 'ghost', size: 'sm' })} href={link.href}>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex items-center gap-2">
					<Button size="sm">Login</Button>
				</div>
			</nav>
		</header>
	);
}
