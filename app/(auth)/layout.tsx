export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <h1>Auth</h1>
                {children}
            </body>
        </html>
    );
}
