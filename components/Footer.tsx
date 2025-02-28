export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center mt-10">
      <p>© {new Date().getFullYear()} एस्ट्रोखनाल. सर्वाधिकार सुरक्षित।</p>
      <p className="text-sm mt-1">
        Developed by <span className="font-semibold">Bisek Khanal</span>
      </p>
    </footer>
  );
}
