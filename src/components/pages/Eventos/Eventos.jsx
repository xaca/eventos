import MainLayout from '../../ui/MainLayout/MainLayout';
import './Eventos.scss';

const events = [
    {
        id: 1,
        tag: 'CHARLA ONLINE · UPB',
        title: 'Prepárate para conseguir el trabajo que sueñas',
        speaker: 'Luisa Fernanda Chica',
        role: 'Directora de crecimiento',
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
        dateValue: 'Jueves 17 Sept, 2026',
        timeValue: '10:00 AM – 12:00 PM',
        type: 'presencial',
        link: null,
        buttonText: null
    },
    {
        id: 4,
        tag: 'CHARLA ONLINE · UPB',
        title: 'Monitoreo y Observabilidad',
        speaker: 'Walter Armando Llano Suárez',
        role: 'Arquitecto CloudOps',
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
        dateValue: 'Jueves 15 Oct, 2026',
        timeValue: '5:00 PM – 6:00 PM',
        type: 'online',
        link: 'https://us02web.zoom.us/meeting/register/agqfXqExRKygDji4tuMN2w',
        buttonText: 'Mirar online'
    }
];

export default function Eventos() {
    return (
        <MainLayout>
            <div className="eventos">
                <h1>Eventos 📅</h1>
                <div className="eventos__lista">
                    {events.map((event) => (
                        <div key={event.id} className="eventos__card">
                            <div className="eventos__grid">

                                {/* Left: tag, title, speaker */}
                                <div className="eventos__info">
                                    <span className="eventos__tag">{event.tag}</span>
                                    <h2 className="eventos__title">{event.title}</h2>
                                    <p className="eventos__speaker">
                                        {event.type === 'online' && (
                                            <span>Facilitador: </span>
                                        )}
                                        <strong>{event.speaker}</strong>
                                        {event.role && (
                                            <span> &mdash; {event.role}</span>
                                        )}
                                    </p>
                                </div>

                                {/* Center: date */}
                                <div className="eventos__fecha">
                                    <span className="eventos__fecha-label">Fecha y Hora</span>
                                    <span className="eventos__fecha-valor">{event.dateValue}</span>
                                    <span className="eventos__hora">{event.timeValue}</span>
                                </div>

                                {/* Right: CTA */}
                                <div className="eventos__accion">
                                    {event.type === 'online' && event.link && (
                                        <a
                                            href={event.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="eventos__btn"
                                        >
                                            {event.buttonText}
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}