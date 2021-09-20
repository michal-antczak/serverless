import styled from 'styled-components'
import {fonts} from './fonts'

export const Text = styled.p`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(p)=>p.color?p.color:p.theme.grey4};
  max-width: ${(p)=>p.wide?p.wide:'45rem'};
  text-align: ${p=>p.align?p.align:'center'};
`
export const Heading1 = styled.h1`
margin: ${p=>p.margin?p.margin:'0'};
  font-family: ${fonts.heading};
  font-size: ${(p)=>p.size?p.size:'2.2rem'};
  text-transform: capitalize;
  letter-spacing: .2rem;
  color: ${(p)=>p.color?p.color:p.theme.primary};
  text-align: ${p=>p.align?p.align:'center'};
  span{
    color: ${p=>p.theme.secondary};
  }
`