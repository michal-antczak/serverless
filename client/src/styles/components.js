import styled from 'styled-components'

export const SectionNarrow = styled.section`
  max-width: 1385px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  background-color: ${(p)=>p.color?p.color:'transparent'};
  padding: 1.4rem;
`