export default function AlertDialog({ onConfirm, onCancel, label }) {
  return (
    <div>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded py-12 px-4 shadow-lg ">
          <h2 className="text-2xl mb-4">{label}</h2>
          <h5 className=" mb-4 text-gray-600">
            *changes made in database cannot be undone!!
          </h5>
          <div className="flex justify-end">
            <button
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded mr-2"
              onClick={onCancel}
            >
              No
            </button>
            <button
              className=" bg-gray-700 text-white py-2 px-4 rounded"
              onClick={onConfirm}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
