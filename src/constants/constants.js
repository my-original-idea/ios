const icons = {
  best:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACWklEQVRIS7WVzWsTYRDGn3k3aSvFVhDBg6WCpRo3hEA1MbHR3UihBw8ejOBBD+Kppwoe9C/Qi3gSDx5EEATjQfDUqk005kNL8atJmiqoeJEKIhYrabLvyCY2NDbJRrvd2+77zPzm3eGZIWzwQxucH+sG3I1EFLPIE9Go0ajYOsDDoaHeDuevcYY4DuJBM8AACgpwzyHKV4eThUXzW8Y/0FOkjnPMdFIKmDoWkuch6M5qnamtARK+PYMGKZMQ6G/y2z5KoYw6S8tsKMoEgJ2NdBL8wWnI0dCLufkaYMLj6e7sKr2GIna16okk+dk8Fyz6WukM4F3vcpd338zMUuUGsYB6gYBLdjaciM8fTuWuVABxv/oSAl47AczGtJ6Z81UAUwF1SQCb7ARIicXw82xPFeBXfwiBzXYCAHzT0tmtKz14SkDITgAzx/RMLlwFHFDPEuGGnQAQn9FSuZtVgKY5qPg1CcBnC4Qps9DnGjbdXTNabL+6nRxIABhYJ+Q9lxHSp7Nf6pxsvjwOuvoV5meAsuN/IKYRGQgdSeU/rcSvGXZTBz27UTISQsG2f4JIY0E6Og6Fk28Kq+MaTtNYUPWSIWMQYktbECm/syJ0PZV99be+6bh+EnAHGcYkILpbQ+RPkGNES71NN9K13Adxv3sEzA+goLMhxECRhTyqZ/KPmhVhuXBiAdcxkohCCEddEinLLBDR0/n7rW5oCagMw6D7lGS+Jf7sDwkwEZ3WU7O3rXrUFqAKUcfAuFZJyDSmZWavWyVf4wOrgHhg70UGsZ7OXrbSNvVBu4Ht6n4DPJrOGc32WOUAAAAASUVORK5CYII=`,
  newest:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAEH0lEQVRIS6WVXWhcRRTHzzmzTUNIXcWi9qkkDVi7arMzN/tiKNG2QbQPimgjfitCHlRasSD64IMgJgp+oSKIvjQ19aWB+FUiuGht0XtnxjRuCrqJCG31oa0JtWY32XuOjCQQ89XQzsv9mHvOb87X/yIsWFrrXUqpc3EcH124dynPuNDIGLOZmb1S6p4kSb64FKfzbRYBAIDy+fx5IlIistM5993lQJYCgDHmZwDIMfNZZt46PDx8ag7S0tKytlwuV1cLXRKgtR5CxM0AcJWIHHPO7QwO29rarkvTtNc59/BlAYwxAwCwERE/EZEeALjbWjtgjLkLAA6JSJdz7uBqIEtGkM/nP1dKXTMxMdGezWbHAOCMtbbVGBOc3gcAJyuVyqZSqTSdy+XqwnU52HI1OMbM5733nVrrfYjYG04tIn1E9BMAGAB4wFp7QGvdIyLvee9/XwqyXASnEfFL59wThULh6jRNTzMzEtEFIrq5VquNE9FAc3NzV7lc/g0Ry86521YFaG1tvVIp9RcA7LPWvh6MtNafIeKdiNidJMkHxpjRNE3XKqVeA4D3wzcists59+lCyKII2tradjDzEDPvyGQyZ+M4Ph5F0ZPMHBxsD75CjYgo3M+ISCwi6wFgjfd+S9hfcdCiKHpRRF4OLQoAbzLzfgAoB6NsNnuqWq2umZmZeVdEHgtzQkQaEW8RkQMicrtz7vCKAGPMIAA0NTc3bx0bGysRUZwkyUPByBjzfCaT2V+r1fYCwFNE1FmtVk+kaTpRX1//JwAMWmsfuRggTO0QEYXTPy4i14vIg4iYFZHjIrJFKRWAIwDwg4h845y7wRjTx8y3eu83LAswxmQBYCIUWET+AIAGIjoXnIpIOwBUiKi3sbHRTk1NrZ+enu4nonUAsB0RQxu/Q0Qb4jgO0fy3/lfkKIpuFJERRLyXmZuIqNTU1HR4fHz8BCJ+yMyhFpuI6CQAPM3M3UT0AiLuSdM0QsRBIirEcRwvBwjFOhI6iIg6EPGrJEm+z+fz27z3R3K5XENdXd0viPgRIr5irf0niqKvp6am7mhoaNgWug8R24PNigBE7ASAjjRND3nvk/k57ejoqC8Wi5XZd0Hav/Xet2utdyNiPzPnvPejSwKCWjJzyP1zAPC2tXZmJUHL5/MbiajLWttjjHkVAPZOTk5eMV/OFw2a1vpHEVmXzWZvKhaLtdUo5mwLj4rIqTlpXzKCWVnYFYoFAG9Za/esBqC1fhQRP0bE+5Mk6V9xDsJmFEVviMgeEelHxGettSFti9asED7DzKGTis65ULuVpWLOi9Y6GL0UVBQAikQ0wswXlFL1InItM4c/niaiDAD0VSqV7lKp9PdFxW7+B4VCoalWq3XPdlVLGDxmDh10Rin1a5qmRzOZzME4jkvLpfJfifkWNyLFiYgAAAAASUVORK5CYII=`,
  food:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABhElEQVRIS+3Vz0tUURjG8Y9itJD+gIo2tRCEhCKXElFrIywYJSGKxIU7DSLaFESLwl1EIEZBRtZCWoqL/oDB0IUgIbjwV8tAMIwoXjgXhsHx3qYZV97VuZz3PN/3ee/DuS2a/LQ0Wd8hIHfCRUe0gK4qta84n0coCpjHuSqxMrobBch0/qRF0cZyU3QCN3ARnehIgGUs4Qs+YrOWk1qdnMIT9KMtZwy/MIWHWKuu3QsQoq9wDDupwxnEzLeSwHFcwLXk8Ch+YAjTlZBqwBiepYJ3uLef/VR3Es9RSu+jGM8glYBBvMVvDGMiLyFp/zE+oAcv0IoBvI/9DHAai2jHbbwuKB5lI3iUvlfovMQ2zmI1A0QSruMNbv2DeFZ6Jbm4hPsJFq5KAQjqN/xM6+91AOJIjPUuerGCIzgTgAcpkpO4U6d4Nu6IawTjKW6GmwDM4TKu4vN/ACqP9uETZgOwgch1M571AOymeTUDsFv40qqXfiCA7Aqut8l9z4WDvX4mjYKV/wLUVkAQFM/sfwAAAABJRU5ErkJggg==`,
  share:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB+0lEQVRIS63VS6jNURTH8c8dEVcYolxkQJnIa4TBLa+UzDwHjCR5JZR0JY+URxQyk5nXgCTJc2hIJEmS90gMvAZoaf9v27n///mfk7Mn57TOb6/vXnuv3zpd6tc0bMBcjE3yV7iJw3jRLEVXTf4+rMNRXMNL/MJELMN6rMXVqjxlgCGI+GLsxRx8rEgwE9cxG68T/GuuzQFTcQIzkjB0y3Glpsqt2I1B6WAPsAkPY18BmIJ72IWz+I1F6XQ/awCDMT9pI98a7EuVPy0Acb/xaFFBJ9ZG9GJJAYh7G4NPnciOEXiD7hwwCp87BBiZHr0fEG12G8c7BIiHj85aWlQwGfexH+f+46ri5PHIO9IjP8vbdBIOYl5quzBXO2tn2ncD8f153qZ5ouiACdjcTnacxGOcrjJaEV+RPLCqTcB5XMLFOkCYZgsWtAmIJok3vFMHiOl5BtNLANuSy4+U/BajYTUe1QF60tgYnwnfYTT2pFh8FrFCFsaK4Rfx/lU2TYfiA4ZluphNoc0BRaxolm8Yjh91gEgU4rD79ySuA3TjfcOh/m6t+sOJcmfhbYuAcbiL/FqbAr6Unaamq2KORdX/rKoKbuFAY8s1AURrhzEXtgoI01zGhRa9sDIlH2DOqgrC9k9wqkVA/EXG/Q8YL1WA7TjUYvJCFiP6WOOeP1acZxlgPYMeAAAAAElFTkSuQmCC`,
  chat:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACdUlEQVRIS8WVTWgTQRTH//MmhoLQiiBYoQc/EG+ak9hLD56KQrIbFquHIiJFiyCIUBDBPRdFwYNfeBARkZCdbEEKvXgTD2ILghb0KIK2+HHRGDLvyYQm5qsxJBbntrP/9/+99+bNrsIGL7XB/ugISKfTo0qpCQCHlFIj1lpSSn3SWr+01kapVOppGIbcKcm2gGw2u4+ZbwMY6xTMzMta6+koip6tp2sB+L5/BMATEdncTfuYmYloxhhztZ2+AeB53hgzLxBRshvzJs1ZY4yrumHVAOPj44MDAwNvAezowRzMXAKQiuP4TX18DeD7figiV3oxr4uJjTGZFkAYhrS4uPiBiIb7AbjzEJGRubm5j1WfSgWe5+0HsNSPeV3sSWPMgwaA7/snRORRnWjBTZJS6rKI7GTmn1rrSwB2i8i5NV2Dpmao1GwURTPNFZwBcKu6KSKpQqGw5HneBQDXANR663nedwCDbTTV8DvGGOdXWdUWTQKolSUiD92zUsrN9gEA35RSp0RkD4BZF9hGU/W8boxxif0BpNPpg0T04h+dQcN9qFQwNTW1aWVl5TOALf1CiGhvPp9/11DB2iTdAHC+T8CPYrG4dX5+/lcLIAiC7aVSaZmIhvqEZI0xUQvAbfi+f0xEHlcPvxeQUqoQRZHXFrAGmbbW3iQi6gXgvknJZHI4l8t9qY1ps1EmkznMzHe11rv+AvkK4CIRPbfWnmbmSa31Njc3xph76wLciyAIkuVy+TgzTxDRqLtcbp+Zi1rrVyKSTyQS93O5nLt4leWmcXV19ai19n0cx687ApozD4JgqFwuJ4wxrnTptn3/96ffbZaddL8BihgFKF9i6zIAAAAASUVORK5CYII=`,
  personal:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABcklEQVRIS7XVsUsQYRjH8Y+JYEODQ4Fig9AgNgRugos0qINDDi4iTooEiX+ACBH+AYEhQoKLg4LgIC2CODlFYyjUJCJBgzSJkMYDJ4jc3Xt30gs33fP7fe95f/e8b4v/vFpq+rdm9X+r6qoAomYa83iVGX/DR2zipgyWAjzCBqYKTNYxUwZJAd7iU2I7AvC5qKYMEO9+oicBOEFvE8Az/KoYZgcu8mrLOujCWUXAU/yuC4iAzxGdlK34iOdFQadCfo+lBGARy00yCE079jFYYHCIYVw1BYTuMaKTOTzJjP5gBR9w+ZBBu9XGERHPi2yvf+AaySMjlUGYxqCNYBvfEZqXmMAuFjJYbiNlgDZs4U0i5KiZLOqmDLCG2YpzEHm8qzMHo/hS0fy27DUO7muKOjjCQE1A/LJDVQDdOK1pHuVxL3TeP7/yOhjHTgNASMawd1ebB4ibK26rJivuj9UUoA/9TdzxFccpQEPvfFlqkh8M+wcbBDcZvsvmYgAAAABJRU5ErkJggg==`,
}
export default icons;
