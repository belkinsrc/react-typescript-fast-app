interface ErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p className="text-center text-red-600 text-xl mb-2">{message}</p>
  );
}