import nextConnect from "next-connect";

export default nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: "error" });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: "method" });
  },
});
