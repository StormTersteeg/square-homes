export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Square Homes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
