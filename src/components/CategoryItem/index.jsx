import "./style.css"
function CategoryItem({ icon, text }) {
    return (
        <div className="categoryItem">
            {icon}
            <span>{text}</span>
        </div>
    )
}
export default CategoryItem;