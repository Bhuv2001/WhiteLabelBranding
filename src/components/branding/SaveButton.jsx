import toast from "react-hot-toast";
import { saveBranding } from "../../services/brandingService";
import { useBranding } from "../../hooks/useBranding";

export default function SaveButton() {
  const { branding, loadBranding } = useBranding();

  async function handleSave() {
    try {
      await saveBranding(branding);
      await loadBranding();

      toast.success("Branding Saved Successfully");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  }

  return (
    <button
      onClick={handleSave}
      className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-3 text-white font-semibold transition"
    >
      Save Branding
    </button>
  );
}