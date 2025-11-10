export default function ReportCard({ title, children }) {
  return (
    <div className="bg-[#234C6A] rounded-2xl shadow-md p-6 mb-6 w-full max-w-3xl mx-auto border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-white text-center">
        {title}
      </h2>
      {children}
    </div>
  );
}
