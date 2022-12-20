import './Common.scss'

export const Year = ({ children, clase }) => {
    return(
        <div className={ `Year ${clase}`}>{children}</div>
    )
}

export const TextTime = ({ clase }) => {
    return(
        <div className={ `TextTime ${clase}`}>
            
        </div>
    )
}
