const db = require("../config/db");

// Add School
exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // validation
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ message: "All fields required" });
  }

  const query =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(201).json({
      message: "School added successfully",
      id: result.insertId,
    });
  });
};

// List Schools sorted by distance
exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: "Latitude & longitude required" });
  }

  const query = "SELECT * FROM schools";

  db.query(query, (err, schools) => {
    if (err) return res.status(500).json(err);

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    // calculate distance
    const sortedSchools = schools.map((school) => {
      const distance = getDistance(
        userLat,
        userLon,
        school.latitude,
        school.longitude,
      );

      return { ...school, distance };
    });

    sortedSchools.sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  });
};

// Haversine formula
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
