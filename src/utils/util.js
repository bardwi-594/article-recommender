export default function formatPercent(num) {
    return Number(num.toFixed(2) * 100).toLocaleString() + "%";
}