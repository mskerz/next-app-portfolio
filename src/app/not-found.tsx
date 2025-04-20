// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-xl font-bold">404 - Page Not Found</h1>
      <div className="border-t border-white"></div>
      <p className="mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
