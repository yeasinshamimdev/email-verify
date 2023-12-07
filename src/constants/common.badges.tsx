export const PlaneBadge=({firstColor, secondColor, title}:{
    firstColor:string,
    secondColor:string,
    title:string
})=>{
    return( 
        <div className={`uppercase bg-${secondColor} text-${firstColor} px-2 text-[0.625rem] font-medium w-fit rounded-md`}>
            {title}
        </div>
         
    )
}