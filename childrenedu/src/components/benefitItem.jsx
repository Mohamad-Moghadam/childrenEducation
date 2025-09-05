export function BenefitItem({svgsrc, title, description}) {


    return <div>
        <i>
            {svgsrc}
        </i>
        <h4>
            {title}
        </h4>
        <p>
            {description}
        </p>
    </div>
}