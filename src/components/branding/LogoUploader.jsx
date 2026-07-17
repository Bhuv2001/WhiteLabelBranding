import { uploadLogo } from "../../services/uploadService";
import { useBranding } from "../../hooks/useBranding";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function LogoUploader() {
  const { branding, updateBranding } = useBranding();

  async function handleUpload(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      const publicUrl = await uploadLogo(file);

      updateBranding("logo_url", publicUrl);
    } catch (error) {
      console.error(error);
      alert("Logo upload failed");
    }
  }

  return (
    <div className="space-y-3">

      <label className="text-sm font-semibold text-slate-700">
        Company Logo
      </label>

      <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-blue-500 hover:bg-blue-50">

        {branding.logo_url ? (
          <img
            src={branding.logo_url}
            alt="Logo"
            className="mx-auto h-24 object-contain mb-4"
          />
        ) : (
          <>
            <FaCloudUploadAlt
              className="mx-auto text-5xl text-blue-500 mb-3"
            />

            <h3 className="font-semibold text-slate-700">
              Upload Company Logo
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              PNG, JPG or SVG
            </p>
          </>
        )}

        <input
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/svg+xml"
          onChange={handleUpload}
          className="
          mt-5
          w-full
          text-sm
          text-slate-500
          file:mr-4
          file:rounded-full
          file:border-0
          file:bg-blue-600
          file:px-5
          file:py-2.5
          file:text-white
          file:font-semibold
          hover:file:bg-blue-700
          cursor-pointer
          "
        />

      </div>

    </div>
  );
}