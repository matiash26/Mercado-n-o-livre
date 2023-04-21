import "./style.css"
function CategoryItem({ icon, text }) {
    return (
        <a href="#" className="categoryItem">
            {icon}
            <span>{text}</span>
        </a>
    )
}
export default CategoryItem;