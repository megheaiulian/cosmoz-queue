import { useHost } from '@neovici/cosmoz-utils/hooks/use-host';
import { useEffect, useState } from '@pionjs/pion';

const BREAKPOINT = 480;

export const useMobile = (breakpoint = BREAKPOINT): boolean => {
	const host = useHost<HTMLElement>(),
		[mobile, setMobile] = useState(false);

	useEffect(() => {
		const observer = new ResizeObserver(([entry]) => {
			setMobile(entry.contentRect.width <= breakpoint);
		});
		observer.observe(host);
		return () => observer.disconnect();
	}, [host, breakpoint]);

	useEffect(() => {
		host.toggleAttribute('data-mobile', mobile);
	}, [host, mobile]);

	return mobile;
};
