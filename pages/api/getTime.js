
export default function handler(req, res) {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");
    res.status(200).json({ time: time })
}