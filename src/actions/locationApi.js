export async function locationApi() {
  try {
    const res = await fetch("http://localhost:5000/api/v1/locations").then(
      (res) => res.json()
    );

    return { data: res };
  } catch (error) {
    // karna saya cuma deploy front end datanya ngmbil dari data dummy ini
    return {
      data: [
        { name: "Jakarta, Indonesia", latitude: -6.2, longitude: 106.816666 },
        {
          name: "Pamekasan, Pamekasan Regency, East Jawa, Indonesia",
          latitude: -7.161367,
          longitude: 113.482498,
        },
        {
          name: "Ambon, Ambon Island, Maluku, Indonesia",
          latitude: -3.654703,
          longitude: 128.190643,
        },
        {
          name: "Palopo, Wara, South Sulawesi, Indonesia",
          latitude: -2.994494,
          longitude: 120.195465,
        },
        {
          name: "Soreang, Bandung, West Java, Indonesia",
          latitude: -7.025253,
          longitude: 107.51976,
        },
        {
          name: "Dumai, Dumai Province, Riau, Indonesia",
          latitude: 1.694394,
          longitude: 101.445007,
        },
        {
          name: "Pematang Siantar City, North Sumatra, Indonesia",
          latitude: 2.970042,
          longitude: 99.068169,
        },
        {
          name: "Banjarsari, Surakarta City, Central Java, Indonesia",
          latitude: -7.550676,
          longitude: 110.828316,
        },
        {
          name: "Lhoksukon, Aceh Utara, Aceh, Indonesia",
          latitude: 5.051701,
          longitude: 97.318123,
        },
        {
          name: "Banda Aceh, Banda Aceh City, Aceh, Indonesia",
          latitude: 5.54829,
          longitude: 95.323753,
        },
      ],
    };
  }
}

export async function crowdPoint() {
  try {
    const res = await fetch("http://localhost:5000/api/v1/crowd_point").then(
      (res) => res.json()
    );
    return { data: res };
  } catch (error) {
    // karna saya cuma deploy front end datanya ngmbil dari data dummy ini
    return {
      data: [
        {
          longitude: 106.77709118108051,
          latitude: -6.142837378870265,
          brand: "Infinix",
          range: "2021-10-20 07:00:00 to 2021-10-20 08:00:00",
          user_per_brand: "1",
          total_user: 1,
        },
        {
          longitude: 106.77709118108051,
          latitude: -6.142837378870265,
          brand: "Samsung",
          range: "2021-10-20 07:00:00 to 2021-10-20 08:00:00",
          user_per_brand: "1",
          total_user: 1,
        },
        {
          longitude: 106.7790911810806,
          latitude: -6.142837378870266,
          brand: "Oppo",
          range: "2021-10-20 07:00:00 to 2021-10-20 08:00:00",
          user_per_brand: "1",
          total_user: 5,
        },
        {
          longitude: 106.7790911810806,
          latitude: -6.142837378870266,
          brand: "Xiaomi",
          range: "2021-10-20 07:00:00 to 2021-10-20 08:00:00",
          user_per_brand: "2",
          total_user: 3,
        },
        {
          longitude: 106.78109118108071,
          latitude: -6.142837378870266,
          brand: "Itel",
          range: "2021-10-20 07:00:00 to 2021-10-20 08:00:00",
          user_per_brand: "1",
          total_user: 8,
        },
        {
          longitude: 106.78209118108074,
          latitude: -6.142837378870266,
          brand: "Huawei",
          range: "2021-10-20 07:00:00 to 2021-10-20 08:00:00",
          user_per_brand: "1",
          total_user: 6,
        },
        {
          longitude: 106.78209118108074,
          latitude: -6.142837378870266,
          brand: "Samsung",
          range: "2021-10-20 07:00:00 to 2021-10-20 08:00:00",
          user_per_brand: "2",
          total_user: 3,
        },
      ],
    };
  }
}
