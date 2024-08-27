import { useState, useEffect } from "react";

const Data = () => {
    const [user, setUser] = useState(null);

    const dataFetch = async () => {
        try {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json(); // await ekledik
            setUser(data);
        } catch (error) {
            console.log('Error!', error);
        }
    };

    useEffect(() => {
        dataFetch(); // dataFetch'i useEffect içinde çağırıyoruz
    }, []); // Boş bağımlılık dizisi, bu fonksiyonun sadece bileşen yüklendiğinde çalışmasını sağlar

    return (
        <>
            <div className="bg-red-300 text-3xl">
                {
                user ? user.map(user => (
                    <div key={user.id}>
                        {user.name} - {user.email} - {user.age}
                    </div>
                ) ) : 'yükleniyo'
                } 
              
            </div>
        </>
    );
};

export default Data;
