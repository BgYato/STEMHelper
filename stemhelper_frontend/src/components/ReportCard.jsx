export default function ReportCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6 w-full max-w-3xl mx-auto border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 text-center">{title}</h2>
      {children}
    </div>
  );
}
