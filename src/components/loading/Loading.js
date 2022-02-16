import { loadingStore } from "../../stores/loadingStore";
import Rive from "rive-react";
import "./loading.css";

export default function Loading() {
  const loading = loadingStore((state) => state);

  return loading.isVisible ? (
    <div className="fixed-top vh-100 d-flex align-items-center" id="loading">
      <div className="mx-auto">
        <Rive src="/loading_animation.riv" />
      </div>
    </div>
  ) : null;
}
