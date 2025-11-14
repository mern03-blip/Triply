import { SaveBlue, SaveMain } from '../../../assets/image'

const StatCard = () => {
    const cardData = [
        {
            id: 1,
            title: "Total Bookings",
            value: "2,847",
            valueColor: "#007AFF",
            badge: "+12%vs last month",
            icon: SaveBlue,
        },
        {
            id: 2,
            title: "Active Users",
            value: "18,392",
            valueColor: "#FF5A5F",
            badge: "+8%vs last month",
            icon: SaveMain,
        },
        {
            id: 3,
            title: "Total Revenue",
            value: "$124,850",
            valueColor: "#000000",
            badge: "+24%vs last month",
            icon: SaveBlue,
        },
        {
            id: 4,
            title: "Popular Destinations",
            value: "156",
            valueColor: "#000000",
            badge: "+5%vs last month",
            icon: SaveBlue,
        },

    ];

    return (
        <div className="relative min-h-[150px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white p-6 rounded-custom flex flex-col items-start relative shadow-sm"
                        style={{ height: '130px' }}
                    >
                        {/* Title */}
                        <p className="text-text1 font-b5 mb-1 text-blackColor">
                            {card.title}
                        </p>

                        {/* Value */}
                        <p className="text-h2 font-b6 mb-2" style={{ color: card.valueColor }}>
                            {card.value}
                        </p>

                        {/* Badge */}
                        <div className="text-text1 font-b5 text-blackColor">
                            {card.badge}
                        </div>

                        {/* Bookmark Icon */}
                        <div
                            className="absolute top-6 right-6 flex items-center justify-center"
                        >
                            <img src={card.icon} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatCard;
