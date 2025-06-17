import { log } from "three/tsl"

const SkillSvg = () => {
    return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='24' height='24'><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8l-4 4l4 4m8 0l4-4l-4-4m-2-3l-4 14"/></svg>
    )
}

const JourneySvg = () => {
    return  (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 8v8m0-8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8-8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 0a4 4 0 0 1-4 4h-1a3 3 0 0 0-3 3"
                ></path>
              </svg>
          
    )
}

const EducationSvg = () => {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
            ></path>
          </svg>
        )      
}

const ValueSvg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 2L2 7l10 5l10-5l-10-5zM2 17l10 5l10-5m-20 0v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3m-20 0l10-5l10 5"
        ></path>
      </svg>
    )
}

const CodeSvg = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 18l6-6l-6-6m-8 12l-6-6l6-6m2 12l4-4m0 0l4-4m-4 4l4 4m0 0l4-4"
        ></path>
      </svg>
    )
}

// Exporting components as named exports
export { SkillSvg, JourneySvg, EducationSvg, ValueSvg, CodeSvg };