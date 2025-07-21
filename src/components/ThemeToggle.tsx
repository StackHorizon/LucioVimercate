import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<button
			onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
			className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
			aria-label="Toggle theme"
		>
			{currentTheme === "dark" ? (
				<Sun className="h-5 w-5 text-yellow-500" />
			) : (
				<Moon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
			)}
		</button>
	);
};

export default ThemeToggle;
