export default function Dynamicroute({params}:{
  params:{
    dynamicroute: string | number

  }
}) {
  return (
    <div>this is a dynamic pageparams {params.dynamicroute}</div>
  )
}
