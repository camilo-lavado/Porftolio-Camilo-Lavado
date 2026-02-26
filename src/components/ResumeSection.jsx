import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Download, FileText, CheckCircle2, Info } from 'lucide-react';

const CV_PATH = '/cv/CamiloLavadoCV.pdf';

// HEAD para metas del PDF (JSX: sin tipos)
async function head(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', cache: 'no-store' });
    const bytes = Number(res.headers.get('content-length') || 0);
    const lm = res.headers.get('last-modified') || undefined;
    const size =
      bytes > 0
        ? (bytes / (1024 * 1024) >= 1
            ? `${(bytes / (1024 * 1024)).toFixed(2)} MB`
            : `${(bytes / 1024).toFixed(0)} KB`)
        : undefined;
    return { size, lastModified: lm, ok: res.ok };
  } catch {
    return { ok: false };
  }
}

export default function ResumeSection() {
  const [meta, setMeta] = useState({ ok: true });
  const [prefetched, setPrefetched] = useState(false);
  const [ack, setAck] = useState(null); // null | 'opened' | 'downloaded'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      head(CV_PATH).then(setMeta);
    }
  }, []);

  useEffect(() => {
    if (!ack) return;
    const t = setTimeout(() => setAck(null), 4000);
    return () => clearTimeout(t);
  }, [ack]);

  const prefetch = () => {
    if (prefetched || typeof window === 'undefined') return;
    fetch(CV_PATH, { method: 'GET', headers: { Range: 'bytes=0-0' } }).catch(() => {});
    setPrefetched(true);
  };

  const openNewTab = () => {
    if (typeof window !== 'undefined') {
      window.open(CV_PATH, '_blank', 'noopener,noreferrer');
      setAck('opened');
    }
  };

  const onDownloadClick = () => {
    setAck('downloaded');
  };

  const ackCopy = useMemo(
    () =>
      ack === 'opened'
        ? { title: 'Abriendo mi CV', text: 'Se está mostrando en una nueva pestaña.' }
        : { title: 'Descarga iniciada', text: 'Tu navegador comenzará a descargar el PDF.' },
    [ack]
  );

  return (
    <section
      id="cv"
      className="relative py-24 px-6 max-w-4xl mx-auto text-white flex flex-col items-center justify-center font-outfit"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-teal-500/10 to-transparent blur-3xl opacity-50" />
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 tracking-tight relative">
        Currículum <span className="text-gradient">Vitae</span>
      </h2>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 glass-panel flex flex-col items-center justify-center transition-all duration-500 hover:border-teal-400/30 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] w-full max-w-2xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(45,212,191,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(45,212,191,1) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <AnimatePresence mode="wait">
          {ack ? (
            <motion.div
              key="ack"
              initial={{ opacity: 0, rotateX: -15, y: 20 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, rotateX: 15, y: -20 }}
              transition={{ duration: 0.45 }}
              className="relative p-10 text-center flex flex-col items-center justify-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/15 ring-1 ring-teal-400/40 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
                <CheckCircle2 className="h-8 w-8 text-teal-300" aria-hidden />
              </div>
              <h3 className="text-2xl font-semibold text-teal-200 mb-2">{ackCopy.title}</h3>
              <p className="text-teal-100/80 mb-6">{ackCopy.text} Gracias por tu interés!</p>
              <button
                onClick={() => setAck(null)}
                className="inline-flex px-6 py-2 rounded-full border border-teal-500/30 text-sm text-teal-300 hover:bg-teal-500/10 hover:text-teal-200 transition-colors"
              >
                Volver
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="normal"
              initial={{ opacity: 0.0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="relative p-8 flex flex-col items-center justify-center"
            >
              <div className="relative flex items-center gap-3 mb-6 justify-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 ring-1 ring-blue-500/30">
                  <FileText className="h-6 w-6 text-blue-300" aria-hidden />
                </div>
                <p className="text-gray-300">Descarga el PDF o ábrelo en una pestaña nueva.</p>
              </div>

              <div className="relative flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-6">
                <a
                  href={CV_PATH}
                  download
                  onMouseEnter={prefetch}
                  onClick={onDownloadClick}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-medium hover:bg-teal-500/20 hover:border-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                >
                  <Download className="h-5 w-5" aria-hidden />
                  Descargar CV
                </a>

                <button
                  onClick={openNewTab}
                  onMouseEnter={prefetch}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:text-white hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                >
                  <ExternalLink className="h-5 w-5" aria-hidden />
                  Abrir pestaña
                </button>
              </div>

              <div className="relative mt-4 flex items-center justify-center gap-3 text-sm">
                {meta.ok ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-300/90" aria-hidden />
                    <span className="text-gray-400">
                      {meta.size ? <span className="mr-3">Tamaño: {meta.size}</span> : null}
                      {meta.lastModified ? (
                        <span>Actualizado: {new Date(meta.lastModified).toLocaleDateString()}</span>
                      ) : null}
                    </span>
                  </>
                ) : (
                  <>
                    <Info className="h-4 w-4 text-amber-300/90" aria-hidden />
                    <span className="text-amber-200/90">
                      No se pudo verificar el archivo. Revisa la ruta: <code className="text-white/90">{CV_PATH}</code>
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
