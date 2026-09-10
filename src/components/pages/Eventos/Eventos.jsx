// Datos de las charlas y eventos UPB / Pragma
const events = [
    {
        id: 1,
        tag: 'CHARLA ONLINE · UPB',
        title: 'Prepárate para conseguir el trabajo que sueñas',
        speaker: 'Luisa Fernanda Chica',
        role: 'Directora de crecimiento',
        dateLabel: 'FECHA Y HORA',
        dateValue: 'Jueves 10 Sept, 2026',
        timeValue: '5:00 PM – 6:00 PM',
        type: 'online',
        link: 'https://us02web.zoom.us/meeting/register/uhKszAaVR-e7EE1k22UNeA',
        buttonText: 'Mirar online'
    },
    {
        id: 2,
        tag: 'CHARLA ONLINE · UPB',
        title: 'App móviles: arquitecturas modernas',
        speaker: 'Darry Morales',
        role: 'Arquitecto de soluciones Mobile',
        dateLabel: 'FECHA Y HORA',
        dateValue: 'Martes 15 Sept, 2026',
        timeValue: '5:00 PM – 6:00 PM',
        type: 'online',
        link: 'https://us02web.zoom.us/meeting/register/cUl3DEchRqCwPX0cvQ6jCg',
        buttonText: 'Mirar online'
    },
    {
        id: 3,
        tag: 'PRESENCIAL · CUPOS LIMITADOS',
        title: 'Visita estudiantes UPB a Pragma',
        speaker: 'Sede Pragma - Edificio SELF',
        role: 'Carrera 42 # 5 sur 47, piso 16, Medellín',
        dateLabel: 'FECHA Y HORA',
        dateValue: 'Jueves 17 Sept, 2026',
        timeValue: '10:00 AM – 12:00 PM',
        type: 'presencial',
        link: '#',
        buttonText: 'Ver detalles'
    },
    {
        id: 4,
        tag: 'CHARLA ONLINE · UPB',
        title: 'Monitoreo y Observabilidad',
        speaker: 'Walter Armando Llano Suárez',
        role: 'Arquitecto CloudOps',
        dateLabel: 'FECHA Y HORA',
        dateValue: 'Martes 22 Sept, 2026',
        timeValue: '5:00 PM – 6:00 PM',
        type: 'online',
        link: 'https://us02web.zoom.us/meeting/register/ooXIvjegSEGNWEsX0yL4IQ',
        buttonText: 'Mirar online'
    },
    {
        id: 5,
        tag: 'CHARLA ONLINE · UPB',
        title: 'Bases UX/UI para desarrolladores',
        speaker: 'Andrés Sucerquia',
        role: 'Analista profesional',
        dateLabel: 'FECHA Y HORA',
        dateValue: 'Martes 6 Oct, 2026',
        timeValue: '5:00 PM – 6:00 PM',
        type: 'online',
        link: 'https://us02web.zoom.us/meeting/register/wKwpF0rxQTeYPE4a_WQhqw',
        buttonText: 'Mirar online'
    },
    {
        id: 6,
        tag: 'CHARLA ONLINE · UPB',
        title: 'Diseñando experiencias centradas en el usuario',
        speaker: 'Andrea Rojo',
        role: 'Analista profesional',
        dateLabel: 'FECHA Y HORA',
        dateValue: 'Jueves 15 Oct, 2026',
        timeValue: '5:00 PM – 6:00 PM',
        type: 'online',
        link: 'https://us02web.zoom.us/meeting/register/agqfXqExRKygDji4tuMN2w',
        buttonText: 'Mirar online'
    }
];

export default function Eventos() {
    return (
        <div className="min-h-screen bg-[#ff7e67] p-4 sm:p-6 lg:p-10 font-sans flex flex-col items-center">
            <div className="w-full max-w-6xl space-y-4">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-[#fffde8] rounded-2xl p-5 sm:p-6 border border-black/10 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                            {/* Sección Izquierda: Tipo, Título y Facilitador (Alineado estrictamente a la izquierda) */}
                            <div className="lg:col-span-6 text-left flex flex-col items-start">
                                <span className="text-[11px] font-extrabold tracking-wider text-neutral-600 uppercase block mb-1 text-left">
                                    {event.tag}
                                </span>

                                <h3 className="text-xl sm:text-2xl font-black text-black leading-tight text-left mb-2">
                                    {event.title}
                                </h3>

                                <div className="text-sm flex items-start justify-start text-neutral-800 text-left w-full">
                                    {event.type === 'online' && <span className="text-neutral-500 font-medium">Facilitador: </span>}
                                    <span className="font-bold text-black">{event.speaker}</span>
                                    {event.role && (
                                        <span className="text-neutral-600"> &nbsp;— {event.role}</span>
                                    )}
                                </div>
                            </div>

                            {/* Sección Central: Fecha y Hora */}
                            <div className="lg:col-span-3 flex flex-col justify-center items-start lg:items-center bg-black/5 lg:bg-transparent p-3 lg:p-0 rounded-xl">
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-600 mb-0.5">
                                    FECHA Y HORA
                                </span>
                                <span className="text-base sm:text-lg font-black text-black">
                                    {event.dateValue}
                                </span>
                                <span className="text-xs font-bold text-neutral-700">
                                    {event.timeValue}
                                </span>
                            </div>

                            {/* Sección Derecha: Botón condicional (mantiene estructura de 3 columnas) */}
                            <div className="lg:col-span-3 flex justify-start lg:justify-end items-center shrink-0 min-h-[48px]">
                                {event.type === 'online' && event.link ? (
                                    <a
                                        href={event.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-black text-white text-sm font-bold py-3 px-6 rounded-full transition-all duration-200 active:scale-95 shadow-md"
                                    >
                                        <span className="text-white font-bold tracking-wide">{event.buttonText}</span>
                                        <svg
                                            className="w-4 h-4 stroke-[2.5] stroke-white text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                            />
                                        </svg>
                                    </a>
                                ) : null}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}