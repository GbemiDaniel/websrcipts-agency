import { Spotlight } from "@/components/ui/Spotlight";

interface PageHeaderProps {
    title: string;
    description?: string;
    glowColor?: string;
}

export const PageHeader = ({
    title,
    description,
    glowColor = "var(--glow-dev)"
}: PageHeaderProps) => {
    return (
        <div className="relative flex flex-col items-center justify-center text-center pt-32 pb-12 px-6 z-10 w-full">
            {/* Centered Ambient Glow */}
            <Spotlight
                color={glowColor}
                size="600px"
                className="-translate-x-1/2"
                position={{ top: '-10%', left: '50%' }}
            />

            <h1 className="text-5xl md:text-7xl font-bold text-primary">
                {title}
            </h1>

            {description && (
                <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
};