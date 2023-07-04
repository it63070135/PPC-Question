//variables
var quiz = [];
quiz[0] = new Question(`What does the word “Shall”, “Should”, “May” in OM-A mean?
(OM- A 0.1.5)`, "See Ans.", "Pass", "#page=2");
quiz[1] = new Question(`How to use of flight and voice recorders in case of accident or major incident?
(OM- A 2.1.3.5)`, "See Ans.", "Pass", "#page=2");
quiz[2] = new Question(`What are the DO Safety-Security-Quality Statement and objectives?
(OM-A 3.1.3)`, "See Ans.", "Pass", "#page=3");
quiz[3] = new Question(`State some example of factors which are common hazard source in aviation.
(OM- A 3.4.9)`, "See Ans.", "Pass", "#page=3");
quiz[4] = new Question(`According to the Method for determining Crew composition, could you explain the Relief of flight
crew member. (OM- A 4.1.2.1)`, "See Ans.", "Pass", "#page=4");
quiz[5] = new Question(`When are Cabin Attendants not required on flight with passengers? and
What is the minimum number of cabin attendants for your aircraft type? (OM- A 4.1.3.1)`, "See Ans.", "Pass", "#page=5");
quiz[6] = new Question(`Which seat shall the Captain acting as a PF during takeoff and landing occupy if there are two
Captains occupying pilot seats?
What is the P-i-C’s duties in case of an emergency/malfunction during takeoff when he is seated in
RH seat?
(OM-A 4.2)`, "See Ans.", "Pass", "#page=6");
quiz[7] = new Question(`Which age the captain is entitled to perform flight duty as a P-i-C?
(OM- A 4.2.6)`, "See Ans.", "Pass", "#page=7");
quiz[8] = new Question(`Who shall assume the P-i-C duties should he become incapable of holding command?
(OM-A 4.3)`, "See Ans.", "Pass", "#page=7");
quiz[9] = new Question(`State the initial qualification for CAT II/III during conversion to a new aircraft type?
(OM- A 5.2.14.1)`, "See Ans.", "Pass", "#page=7");
quiz[10] = new Question(`What is the Route Qualification requirements for P-i-C? (OM-A 5.2.15.3)`, "See Ans.", "Pass", "#page=8");
quiz[11] = new Question(`What are the Route and Aerodrome Qualification requirements for co-pilots?
(OM- A 5.2.15.1)
`, "See Ans.", "Pass", "#page=8");
quiz[12] = new Question(`What are the Aerodrome Qualification requirements for P-i-C?
(OM-A 5.2.15.4)`, "See Ans.", "Pass", "#page=9");
quiz[13] = new Question(`While on duty, how shall any crew member who become ill or incapacitated do?
(OM- A 6.1.1.2)`, "See Ans.", "Pass", "#page=9");
quiz[14] = new Question(`How much blood alcohol level that crew member must not commence a flight duty? (OM-A 6.1.2)`, "See Ans.", "Pass", "#page=11");
quiz[15] = new Question(`SHow do coffee and especially black coffee effects when the relative humidity of cabin air is much
lower in flight? (OM- A 6.1.14.5)`, "See Ans.", "Pass", "#page=11");
quiz[16] = new Question(`When flying in Rain, in addition to poor visibility, there may be a refraction error, what could be
the result of such occurrence?
(OM-A 6.4.13)
`, "See Ans.", "Pass", "#page=11");
quiz[17] = new Question(`What can be expected in your visual perception when descending into shallow fog?
(OM- A 6.4.15)`, "See Ans.", "Pass", "#page=11");
quiz[18] = new Question(`What is the minimum rest period?
(OM-A 7.2.4)`, "See Ans.", "Pass", "#page=12");
quiz[19] = new Question(`What is the allowable flight duty periods that a flight may be planned to be completed within?
When will extra flight crew be required?
(OM- A 7.2.2)`, "See Ans.", "Pass", "#page=12");
quiz[20] = new Question(`How many block hours may crew member fly as an operating crew member in one calendar year?
(OM-A 7.2.3)`, "See Ans.", "Pass", "#page=13");
quiz[21] = new Question(`What is the maximum standby period?
(OM-A 7.2.3)`, "See Ans.", "Pass", "#page=13");
quiz[22] = new Question(`How long does the FDP extension for Flight Crew and Cabin Crew when the augmented crew
provided?
(OM- A 7.3)
`, "See Ans.", "Pass", "#page=13");
quiz[23] = new Question(`. How can we deal with the unforeseen circumstances in actual flight operations ?
(OM- A 7.3.4)`, "See Ans.", "Pass", "#page=14");
quiz[24] = new Question(`What is the minimum turning altitude after takeoff?
(OM-A 8.1.1.2.1)`, "See Ans.", "Pass", "#page=15");
quiz[25] = new Question(`What is minimum terrain clearance in case of engine failure?
(OM- A 8.3.2.1)`, "See Ans.", "Pass", "#page=15");
quiz[26] = new Question(`What are the corrections for Wind, Temperature and QNH for all Minimum Flight Altitudes?
(OM-A 8.1.1.3)`, "See Ans.", "Pass", "#page=16");
quiz[27] = new Question(` How shall we determine which aerodrome to be utilized?
(OM- A 8.1.2.1)`, "See Ans.", "Pass", "#page=16");
quiz[28] = new Question(`Define the Airport classification.
(OM-A 8.1.2.2)`, "See Ans.", "Pass", "#page=17");
quiz[29] = new Question(`What is qualification of P-i-C to operating the group C aerodrome?
(OM-A 8.1.2.3) `, "See Ans.", "Pass", "#page=17");
quiz[30] = new Question(`How is the Rescue and Fire Fighting categorized and what are the Rescue and Fire Fighting
(RFFS) categories required for your aircraft type?
(OM- A 8.1.2.4)
`, "See Ans.", "Pass", "#page=18");
quiz[31] = new Question(`Explain takeoff alternate.
(OM- A 8.1.3.2.2)`, "See Ans.", "Pass", "#page=20");
quiz[32] = new Question(`How many Flight Planning Methods of Thai’s fuel policy? (OM-A 8.1.7.2)`, "See Ans.", "Pass", "#page=21");
quiz[33] = new Question(`Described Basic Fuel Planning. (OM-A 8.1.7.3)`, "See Ans.", "Pass", "#page=21");
quiz[34] = new Question(`Described the condition and fuel for planning without Destination Alternate.
(OM-A 8.1.3.2.5)(OM-A 8.1.7.6)`, "See Ans.", "Pass", "#page=23");
quiz[35] = new Question(`Described Planning with CF 3% ERA (En-Route Alternate).
(OM-A 8.1.7.7)`, "See Ans.", "Pass", "#page=23");
quiz[36] = new Question(`Described Planning with Secondary Destination via PDP (RCF).
(OM- A 8.1.7.9)`, "See Ans.", "Pass", "#page=24");
quiz[37] = new Question(`What are the Destination Weather requirements?
(OM-A 8.1.3.2.3)`, "See Ans.", "Pass", "#page=25");
quiz[38] = new Question(`What is a Destination Alternate and what are the Alternate Weather requirements?
(OM- A 8.1.2.5) (OM- A 8.1.3.2.4)`, "See Ans.", "Pass", "#page=25");
quiz[39] = new Question(`What is the Isolated Destination airport and fuel planning?
(OM- A 8.1.2.5) (OM-A 8.1.7.5)`, "See Ans.", "Pass", "#page=26");
quiz[40] = new Question(`What is the Takeoff minima for THAI aircraft?
(OM-A 8.1.3.2.1) (OM-A 8.4.5)`, "See Ans.", "Pass", "#page=27");
quiz[41] = new Question(`What are the weather requirements for Category II/III ?
(OM- A 8.1.3.3.5)`, "See Ans.", "Pass", "#page=28");
quiz[42] = new Question(`What is visual reference for Non-Precision Approach ?
(OM-A 8.1.3.3.1)
`, "See Ans.", "Pass", "#page=30");
quiz[43] = new Question(`What is the minimum visibility requirement to conduct a CAT I approach?
(OM- A 8.1.3.3.4)`, "See Ans.", "Pass", "#page=30");
quiz[44] = new Question(`What is visual reference for CAT IIIA approach?
(OM-A 8.1.3.3.5)`, "See Ans.", "Pass", "#page=31");
quiz[45] = new Question(`State the requirements for night landing ?
(OM-A 8.1.3.3.7)`, "See Ans.", "Pass", "#page=32");
quiz[46] = new Question(`What is the Alert Height ? (OM- A 8.4.3)
`, "See Ans.", "Pass", "#page=32");
quiz[47] = new Question(`Standard Meteorological information shall contain:
(OM- A 8.1.6)`, "See Ans.", "Pass", "#page=32");
quiz[48] = new Question(`Can P-i-C order final ramp fuel lower than minimum fuel in flight plan?
(OM-A 8.1.7.2)
`, "See Ans.", "Pass", "#page=33");
quiz[49] = new Question(`How can P-i-C ensure the minimum fuel requirements before commencement flight?
(OM- A 8.1.7.2, 8.1.7.14)`, "See Ans.", "Pass", "#page=33");
quiz[50] = new Question(`What is an En-Route Alternate aerodrome?
(OM- A 8.1.2.5)
`, "See Ans.", "Pass", "#page=34");
quiz[51] = new Question(`What is the Contingency Fuel ?
(OM-A 8.1.7.1) (OM-A 8.1.7.2)`, "See Ans.", "Pass", "#page=34");
quiz[52] = new Question(` Describe the Taxi Fuel.
(OM-A 8.1.7.3, OM-A 8.1.7.11)`, "See Ans.", "Pass", "#page=35");
quiz[53] = new Question(` What is a Company Fuel, Alternate Fuel and Final Reserve Fuel?
When a Go-around is made, which portion of the fuel is being used?
(OM-A 8.1.7.3, OM-A 8.1.7.13)`, "See Ans.", "Pass", "#page=36");
quiz[54] = new Question(`When do we need Additional Fuel?
(OM-A 8.1.7.3)
`, "See Ans.", "Pass", "#page=37");
quiz[55] = new Question(`When is Extra Fuel requiring ? (OM-A 8.1.7.3)`, "See Ans.", "Pass", "#page=37");
quiz[56] = new Question(`How do we calculate the amount of fuel for THRU Tankage?
(OM-A 8.1.7.13.2)`, "See Ans.", "Pass", "#page=37");
quiz[57] = new Question(`Why a flight is sometimes planned with economy tankage and what is taken care of
when planning a flight with economy tankage?
(OM-A 8.1.7.13.2)`, "See Ans.", "Pass", "#page=37");
quiz[58] = new Question(`Who shall sign and responsible for loadsheet, NOTOC?
(OM-A 8.1.8.2.2)
`, "See Ans.", "Pass", "#page=38");
quiz[59] = new Question(`What are items to be checked on Loadsheet/NOTOC?
(OM-A 8.1.8.3.1)`, "See Ans.", "Pass", "#page=38");
quiz[60] = new Question(`What are the acceptable tolerances of DLI and LIZFW between the EDP load sheet and balance
table for your aircraft type ?
(OM-A 8.1.8.3.1)`, "See Ans.", "Pass", "#page=39");
quiz[61] = new Question(`According to Mass & Balance Documentation Control, Before starting aircraft movement, the P-i-C
shall ensure that: (OM-A 8.1.8.3.2)
`, "See Ans.", "Pass", "#page=39");
quiz[62] = new Question(`When loading error is suspected what should the P-i-C do ?
(OM-A 8.1.8.3.3)
`, "See Ans.", "Pass", "#page=39");
quiz[63] = new Question(`In the event of last minute change which item need to be re-verified ?
(OM-A 8.1.8.4.1)
`, "See Ans.", "Pass", "#page=40");
quiz[64] = new Question(`In which situation shall the filed flight plan be amended ?
(OM-A 8.1.9)`, "See Ans.", "Pass", "#page=41");
quiz[65] = new Question(`What is the aircraft type designator use for ATS flight plan filing for your aircraft type ?
(OM-A 8.1.9.4)`, "See Ans.", "Pass", "#page=41");
quiz[66] = new Question(`What shall be read back when communicate with ATC?
(OM-A 8.10.4.1)`, "See Ans.", "Pass", "#page=41");
quiz[67] = new Question(`What is the Operation Briefing Card ?
(OM-A 8.1.13.3.2)`, "See Ans.", "Pass", "#page=42");
quiz[68] = new Question(`Explain procedure fueling with passenger on board ?
(OM-A 8.2.1.2)`, "See Ans.", "Pass", "#page=42");
quiz[69] = new Question(`How do we determine the fuel freezing point when difference types of fuel are mixed?
(OM-A 8.2.1.3)`, "See Ans.", "Pass", "#page=44");
quiz[70] = new Question(`Which type of passenger does not require a seat ?
(PHM 5.4.2 p.1)`, "See Ans.", "Pass", "#page=45");
quiz[71] = new Question(`In case of passengers needing immediate medical attention, what is to be done following the
procedure ?
(OM-A 8.2.2.2.1, OM-A 6.3.7, PHM 10.9.1)`, "See Ans.", "Pass", "#page=45");
quiz[72] = new Question(`What is the difference between an Inadmissible Passenger and a Deportee ?
(OM-A 8.2.2.2.2)`, "See Ans.", "Pass", "#page=48");
quiz[73] = new Question(`What are the traveling regulations for Deportees ?
(OM-A 8.2.2.2.2)`, "See Ans.", "Pass", "#page=49");
quiz[74] = new Question(`How does THAI assign seat for Deportees ?
(OM-A 8.2.2.2.2)
`, "See Ans.", "Pass", "#page=50");
quiz[75] = new Question(`What is the procedure for passenger refusal of embarkation ?
(OM-A 8.2.3)`, "See Ans.", "Pass", "#page=51");
quiz[76] = new Question(`What shall be done in the event those fire/overheat tires ?
(OM-A 8.2.2.5.5)`, "See Ans.", "Pass", "#page=51");
quiz[77] = new Question(`How many anti-icing fluids are there ?
(OM-A 8.2.5.2)`, "See Ans.", "Pass", "#page=52");
quiz[78] = new Question(`What are criteria for freezing condition ?
(OM-A 8.2.5.2)`, "See Ans.", "Pass", "#page=53");
quiz[79] = new Question(`What are the representative surface regarding de-/anti-icing procedures ?
(OM-A 8.2.5.2)`, "See Ans.", "Pass", "#page=53");
quiz[80] = new Question(`What is a hold-over time (HOT) ?
(OM-A 8.2.5.2)`, "See Ans.", "Pass", "#page=53");
quiz[81] = new Question(`Explain criteria for icing condition ?
(OM-A 8.2.5.2)`, "See Ans.", "Pass", "#page=53");
quiz[82] = new Question(`What shall pre take off check to be done in freezing condition ?
(OM-A 8.2.5.2)
`, "See Ans.", "Pass", "#page=54");
quiz[83] = new Question(`Compare the change of altimeter settings from QNH to STD and STD to QNH during climb and
descent ?
(OM-A 8.3.3.2)`, "See Ans.", "Pass", "#page=54");
quiz[84] = new Question(`What actions should we take against GPWS warnings ?
(OM-A8.3.5.5)`, "See Ans.", "Pass", "#page=55");
quiz[85] = new Question(`What are the actions required after lightning strike ?
(OM-A 8.3.8.2)`, "See Ans.", "Pass", "#page=55");
quiz[86] = new Question(`How is turbulence intensity defined ?
(OM-A 8.3.8.4.2)`, "See Ans.", "Pass", "#page=56");
quiz[87] = new Question(`What is the required landing runway length ? and how is the landing distance determined ?
(OM-A 8.3.8.12.1)`, "See Ans.", "Pass", "#page=56");
quiz[88] = new Question(`Is the effect of reverse thrust used in the takeoff and landing performance calculation ?
(OM-A 8.3.8.12.1)`, "See Ans.", "Pass", "#page=57");
quiz[89] = new Question(`When shall shoulder harness and its locking devices be used ?
(OM-A 8.3.11.1)`, "See Ans.", "Pass", "#page=58");
quiz[90] = new Question(`Can the Cabin Attendants continue their services when the fasten seat belt sign is turned on
during turbulence ?
(OM-A 8.3.11)
`, "See Ans.", "Pass", "#page=58");
quiz[91] = new Question(`Who may apply for permission to visit and/or to travel on the flight deck even without cabin seat
available ?
(OM-A 8.3.12)`, "See Ans.", "Pass", "#page=59");
quiz[92] = new Question(`What is defined by the term pilot incapacitation and how can it be detected ?
(OM-A 8.3.14)`, "See Ans.", "Pass", "#page=60");
quiz[93] = new Question(`What are the actions required in case of a pilot incapacitation ?
(OM-A 8.3.14)`, "See Ans.", "Pass", "#page=61");
quiz[94] = new Question(`What devices are acceptable to be used on board for every phase of flight ?
(OM-A 8.3.15.9)`, "See Ans.", "Pass", "#page=62");
quiz[95] = new Question(`How do we handle the oxygen bottles for medical use ?
(OM-A 8.3.15.13)
`, "See Ans.", "Pass", "#page=63");
quiz[96] = new Question(`What is minimum portable oxygen bottles requirement for your aircraft type ?
(OM-A 8.8.3)
`, "See Ans.", "Pass", "#page=63");
quiz[97] = new Question(`What are the conditions for replanning in flight ? (OM-A 8.3.7)`, "See Ans.", "Pass", "#page=64");
quiz[98] = new Question(`Can a flight be replanned without alternate?
(OM-A 8.3.2.5.2)
`, "See Ans.", "Pass", "#page=65");
quiz[99] = new Question(`. May we disregard the forecast weather, which is below minimum required, and take the actual
weather instead for replanning ?
(OM-A 8.3.2.5.2)
`, "See Ans.", "Pass", "#page=65");
quiz[100] = new Question(`What is a sterile flight deck and when does it come into effect ?
(OM-A 8.3.19.2)`, "See Ans.", "Pass", "#page=65");
quiz[101] = new Question(`When is the VOR not recommended for auto-tuning?
How can a bearing error be checked between two VOR systems ? (OM-A 8.3.2.2)`, "See Ans.", "Pass", "#page=66");
quiz[102] = new Question(`In principle, how many types of ILS ground installations are used ?
(OM-A 8.3.2.2)`, "See Ans.", "Pass", "#page=67");
quiz[103] = new Question(`How is the ILS identified ?
(OM-A 8.3.2.2)`, "See Ans.", "Pass", "#page=67");
quiz[104] = new Question(`What is the coverage sector for localizer and glide path ?
(OM-A 8.3.2.2)`, "See Ans.", "Pass", "#page=67");
quiz[105] = new Question(`What are the conditions to follow the ILS below 1,000 feet ?
(OM-A 8.3.2.2)`, "See Ans.", "Pass", "#page=68");
quiz[106] = new Question(`What are the ILS ground monitoring systems ?
(OM-A 8.3.2.2)`, "See Ans.", "Pass", "#page=69");
quiz[107] = new Question(`What do you do when failure or degradation of B-RNAV is detected ?
(OM-A 8.3.2.3.1)`, "See Ans.", "Pass", "#page=69");
quiz[108] = new Question(`How the ADF should set for departure and for approach ?
(OM-A 8.3.2.2)`, "See Ans.", "Pass", "#page=70");
quiz[109] = new Question(`When do we use the Marker ? (OM-A 8.3.2.2)`, "See Ans.", "Pass", "#page=71");
quiz[110] = new Question(`How do you consider the significant weather “WIND SHEAR” ?
(OM-A 8.3.8.5.1-2)`, "See Ans.", "Pass", "#page=71");
quiz[111] = new Question(`State the use of the Autopilot ? (OM-A 8.3.18.2)`, "See Ans.", "Pass", "#page=72");
quiz[112] = new Question(`How the Flight Director system could be used ?
(OM-A 8.3.18.4)`, "See Ans.", "Pass", "#page=73");
quiz[113] = new Question(`When Thrust levers shall be guarded ?
(OM-A 8.3.18.3)`, "See Ans.", "Pass", "#page=73");
quiz[114] = new Question(`Who should make the required FMS entries and mode selection below 10,000 feet ?
(OM-A 8.3.18.1.5)`, "See Ans.", "Pass", "#page=73");
quiz[115] = new Question(`Stated the operational requirements for CAT II/III ? (OM-A 8.4.8.2)`, "See Ans.", "Pass", "#page=74");
quiz[116] = new Question(`Does CAT II weather minima provide sufficient visual reference for making a manual landing ?
(OM-A 8.4.8.3) (OM-A 16.2)
`, "See Ans.", "Pass", "#page=74");
quiz[117] = new Question(`State the visual reference for CAT III without DH ?
(OM-A 8.4.7.5)`, "See Ans.", "Pass", "#page=75");
quiz[118] = new Question(`What are the possible responses to the failure of any system, instrument or element during the
CAT II/CAT III approach ?
(OM-A 8.4.7.6, OM-A 16.2) `, "See Ans.", "Pass", "#page=75");
quiz[119] = new Question(`Stated the general of company regulations for CAT II /III operations ?
(OM-A 8.4.8)`, "See Ans.", "Pass", "#page=76");
quiz[120] = new Question(`State the use of automatic flight system for CAT II/CAT III approach ?
(OM-A 8.4.8.3)`, "See Ans.", "Pass", "#page=77");
quiz[121] = new Question(`What are the En-Route Alternates planning minima for EDTO/ETOPS ?
(OM-A 8.5.6.8)`, "See Ans.", "Pass", "#page=77");
quiz[122] = new Question(`What is the Entry Piont (EEP) and the Equitime Point (ETP) for EDTO/ETOPS ?
(OM-A 8.5.3)`, "See Ans.", "Pass", "#page=77");
quiz[123] = new Question(`What are the possible failure scenarios for calculating EDTO/ETOPS critical fuel scenarios ?
(OM-A 8.5.6.9)
`, "See Ans.", "Pass", "#page=78");
quiz[124] = new Question(`State the diversion fuel for EDTO/ETOPS critical fuel reserves ?
(OM-A 8.5.6.10)`, "See Ans.", "Pass", "#page=79");
quiz[125] = new Question(`What should be done in the event of weather deterioration at an EDTO/ETOPS alternate below
applicable landing minima ?
(OM-A 8.5.7.1)
`, "See Ans.", "Pass", "#page=80");
quiz[126] = new Question(`State EDTO/ETOPS system failures that have to justify the diversion ?
(OM-A 8.5.7.4)`, "See Ans.", "Pass", "#page=80");
quiz[127] = new Question(`What is the purpose of MEL ?
(OM-A 8.6.1)`, "See Ans.", "Pass", "#page=81");
quiz[128] = new Question(`What is CDL ?
(OM-A 8.6.2)`, "See Ans.", "Pass", "#page=81");
quiz[129] = new Question(`State the authority of the P-I-C about dispatched aircraft due regard to MEL/CDL ?
(OM-A 8.6.3)
`, "See Ans.", "Pass", "#page=82");
quiz[130] = new Question(`Which flights are considered as the non-revenue flights ?
(OM-A 8.7.1)`, "See Ans.", "Pass", "#page=82");
quiz[131] = new Question(`Who are accepted as passengers on non-revenue flights ?
(OM-A 8.7.9)`, "See Ans.", "Pass", "#page=83");
quiz[132] = new Question(`What is the positioning flight ?
(OM-A 8.7.7)
`, "See Ans.", "Pass", "#page=83");
quiz[133] = new Question(`State the conditions for crew members which oxygen must be provided and used ?
(OM-A 8.8.1.1)`, "See Ans.", "Pass", "#page=84");
quiz[134] = new Question(`State the conditions which oxygen must be provided and used for passengers ?
(OM-A 8.8.1.2)`, "See Ans.", "Pass", "#page=84");
quiz[135] = new Question(`State the use of flight crew oxygen.
(OM-A 8.8.2.3)`, "See Ans.", "Pass", "#page=85");
quiz[136] = new Question(`What does the "CABIN CLEAR" report has been received from the IM/Air Purser, indicating ?
(OM-A 8.9.1.3)
`, "See Ans.", "Pass", "#page=86");
quiz[137] = new Question(`During taxiing, can we always follow the taxi guidelines markings to ensure adequate clearance ?
(OM-A 8.9.1.9)`, "See Ans.", "Pass", "#page=87");
quiz[138] = new Question(`How to prevent runway incursion during taxi.
(OM-A 8.9.1.11)`, "See Ans.", "Pass", "#page=87");
quiz[139] = new Question(`What is affected when applying reduced V1 ?
(OM-A 8.9.2.4)`, "See Ans.", "Pass", "#page=88");
quiz[140] = new Question(`May an IFR flight be cleared to execute a visual approach ?
(OM-A 8.9.7.6)`, "See Ans.", "Pass", "#page=88");
quiz[141] = new Question(`What is the minimum runway width for takeoff and landing ?
(OM-A 8.9.2.3)`, "See Ans.", "Pass", "#page=89");
quiz[142] = new Question(`What are the requirements for an intersection takeoff ?
(OM-A 8.9.2.3)`, "See Ans.", "Pass", "#page=89");
quiz[143] = new Question(`Which RVR value determines the minima for takeoff during the low visibility operation ?
(OM-A 8.9.2.7)`, "See Ans.", "Pass", "#page=89");
quiz[144] = new Question(`Who shall perform takeoff in RVR less than 500 meters ?
(OM-A 8.9.2.7)
`, "See Ans.", "Pass", "#page=90");
quiz[145] = new Question(`With speed close to V1, is it justified to continue a takeoff if a pilot is incapacitated ?
(OM-A 8.9.2.8)`, "See Ans.", "Pass", "#page=90");
quiz[146] = new Question(`What type of abnormality justifies a discontinued takeoff after V1 ?
(OM-A 8.9.2.8)
`, "See Ans.", "Pass", "#page=91");
quiz[147] = new Question(`What is the Mental Review ? `, "See Ans.", "Pass", "#page=91");
quiz[148] = new Question(`What is speed an aircraft can be expected to lift off at the end of the required runway length
in case of a continued take-off after engine failure ?
(OM-A 8.9.2.8)
`, "See Ans.", "Pass", "#page=91");
quiz[149] = new Question(`In case we have noticed or been reported of tires failure, does it always mean that the
damage will not affect the continuation of a flight even if all indications are normal ?
(OM-A 8.9.2.8)`, "See Ans.", "Pass", "#page=92");
quiz[150] = new Question(`During climb, when the aircraft altitude is within 1,000 ft of the assigned altitude, may the rate of
climb be greater than 1,000 ft per minute ?
(OM-A 8.9.3.1) `, "See Ans.", "Pass", "#page=93");
quiz[151] = new Question(`What is a Range Control ?
(OM-A 8.9.4)`, "See Ans.", "Pass", "#page=93");
quiz[152] = new Question(`When shall an approach briefing be performed ?
(OM-A 8.9.5)`, "See Ans.", "Pass", "#page=93");
quiz[153] = new Question(`What is a precision and non-precision approach ?
(OM-A 8.9.5)`, "See Ans.", "Pass", "#page=94");
quiz[154] = new Question(`What is the difference between an automatic and semi-automatic approach ?
(OM-A 8.9.5)`, "See Ans.", "Pass", "#page=94");
quiz[155] = new Question(`Can we execute a visual approach during the night time ? (OM-A 8.9.7.6)`, "See Ans.", "Pass", "#page=95");
quiz[156] = new Question(`Can the rate of descent be more than 2,000 ft when aircraft altitude is within 2,000 ft of the
indicated MOCA/MORA or MSA ?
(OM-A 8.9.6)
`, "See Ans.", "Pass", "#page=95");
quiz[157] = new Question(`State the exceptions when an entire approach procedure is not required to be executed ?
(OM-A 8.9.7)`, "See Ans.", "Pass", "#page=96");
quiz[158] = new Question(` After passing the outer marker or equivalent position.
Can an approach be continued to the DA/DH/MDA if the official reported RVR or visibility falls
below the required value ?
(OM-A 8.9.7.1)
`, "See Ans.", "Pass", "#page=96");
quiz[159] = new Question(` In IMC the aircraft shall not descend from the initial /intermediate approach altitude unless ?
(OM-A 8.9.7)`, "See Ans.", "Pass", "#page=97");
quiz[160] = new Question(`State the required visual references for a non-precision or ILS CAT I approach ?
(OM-A 8.9.7.2)`, "See Ans.", "Pass", "#page=97");
quiz[161] = new Question(`State the required visual references for an ILS CAT II or ILS CAT IIIA ?
(OM-A 8.9.7.2)`, "See Ans.", "Pass", "#page=98");
quiz[162] = new Question(`For CAT II/ III approach, the RVR shall be measured by transmissometer or other such means. if
more than one RVR value is given for the same runway, which RVR determines the minima for
landing ?
(OM-A 8.9.7.3)`, "See Ans.", "Pass", "#page=99");
quiz[163] = new Question(`What does ceiling refers to ? (OM-A 8.9.7.3)`, "See Ans.", "Pass", "#page=99");
quiz[164] = new Question(`During automatic approach at plus hundred, who is to start dividing attention between flight
monitoring and lookout for visual guidance? What will be his call out ?
(OM-A 8.9.7.5.1)`, "See Ans.", "Pass", "#page=99");
quiz[165] = new Question(`In low visibility approaches, what shall we do to reduce the blinding effect caused by high
intensity approach or runway lights ?
(OM-A 8.9.7.5.5)`, "See Ans.", "Pass", "#page=100");
quiz[166] = new Question(`What is the primary reference, if both the ILS glide path and the PAPI/ VASI are available ?
(OM-A 8.9.7.5.6)`, "See Ans.", "Pass", "#page=101");
quiz[167] = new Question(`Can we use precision approach path indicator (PAPI) until touchdown ?
(OM-A 8.9.7.5.6) `, "See Ans.", "Pass", "#page=101");
quiz[168] = new Question(`Explain how a CANPA (Constant Angle Non-Precision Approach) is conducted ?
(OM-A 8.9.7.9)`, "See Ans.", "Pass", "#page=101");
quiz[169] = new Question(`How can we increase the safety margin in case a go-around has been made from altitude below
minima or beyond missed approach ?
(OM-A 8.9.8)`, "See Ans.", "Pass", "#page=102");
quiz[170] = new Question(`When shall a go-around be made from an ILS approach ?
(OM-A 8.9.8.1)`, "See Ans.", "Pass", "#page=102");
quiz[171] = new Question(`When shall a go-around be made from approaches without glide path reference ?
(OM-A 8.9.8.2&4)
`, "See Ans.", "Pass", "#page=103");
quiz[172] = new Question(`What is expected when visual reference is lost while circling ?
(OM-A 8.9.8.3)`, "See Ans.", "Pass", "#page=103");
quiz[173] = new Question(`Explain when you can perform a second approach after the first go-around ?
(OM-A 8.9.8.5)`, "See Ans.", "Pass", "#page=104");
quiz[174] = new Question(`When shall a change of control be made in case the P-I-C (acting as PNF) has taken over the
controls from PF in order to make a go-around ?
(OM-A 8.9.8)
`, "See Ans.", "Pass", "#page=104");
quiz[175] = new Question(`What is considered by a stabilized approach ?
(OM-A 8.9.9)`, "See Ans.", "Pass", "#page=104");
quiz[176] = new Question(`What impression can one get when landing in precipitation or drifting snow/sand in crosswind
conditions ?
(OM-A 8.9.11)`, "See Ans.", "Pass", "#page=105");
quiz[177] = new Question(`How do we handle the problem when landing in crosswind with precipitation or drifting
snow/sand conditions ?
(OM-A 8.9.11)
`, "See Ans.", "Pass", "#page=105");
quiz[178] = new Question(`How many Noise Abatement Procedures exist and what are they ?
(OM-A 8.9.3.2.5), (RM 1.5.9.5)`, "See Ans.", "Pass", "#page=106");
quiz[179] = new Question(`What should the height over runway threshold be ?
(OM-A 8.9.11)`, "See Ans.", "Pass", "#page=109");
quiz[180] = new Question(`What is the guideline procedure for normal and abnormal situation in a Two Man Flight Deck ?
(OM-A 8.11.2)
`, "See Ans.", "Pass", "#page=109");
quiz[181] = new Question(`What are the differences between ATC clearances, ATC instructions, and ATC approvals ?
(OM-A 8.10.4.2)`, "See Ans.", "Pass", "#page=110");
quiz[182] = new Question(`How to identified and what shall you do if your passengers or crew suspected to be
communicable disease ?
(OM-A 8.10.4.6)`, "See Ans.", "Pass", "#page=110");
quiz[183] = new Question(`What is the difference in reading the Emergency Checklist from the Normal Checklist ?
(OM-A 8.10.1)`, "See Ans.", "Pass", "#page=111");
quiz[184] = new Question(`What are the restrictions of screens usage ?
(OM-A 8.10.2.2)`, "See Ans.", "Pass", "#page=113");
quiz[185] = new Question(`Does the estimated time over a given point reported to ATC that is in error of more than 2
minutes need to be revised in every country ?
(OM-A 8.10.2.5)
`, "See Ans.", "Pass", "#page=113");
quiz[186] = new Question(`Distinguish between communication failure in VMC and IMC when not stated in country's rules
and procedures ?
(OM-A 8.10.2.6), (RM 1.7.2.2)`, "See Ans.", "Pass", "#page=113");
quiz[187] = new Question(`Shall we switch the anti-collision light to off when the aircraft is to be towed to the gate with
engines shut down ?
(OM-A 8.10.2.7), (RM 1.5.2.6.2.4)`, "See Ans.", "Pass", "#page=115");
quiz[188] = new Question(`What is the unruly/disruptive (disorderly) passengers ?
(OM-A 10.2.3.1)
`, "See Ans.", "Pass", "#page=116");
quiz[189] = new Question(`What is the handling procedures in case of unruly/disruptive (disorderly) passengers ?
(OM-A 10.2.3.3)`, "See Ans.", "Pass", "#page=117");
quiz[190] = new Question(`What should be done in case of handling of sabotage treats ?
(OM-A 10.2.1.1)`, "See Ans.", "Pass", "#page=118");
quiz[191] = new Question(`What should be done in case of threat of hijacking on ground and in flight ?
(OM-A 10.2.2.2)
`, "See Ans.", "Pass", "#page=120");
quiz[192] = new Question(`What are the procedures for fuel jettison ?
(OM-A 8.11.7.1)`, "See Ans.", "Pass", "#page=122");
quiz[193] = new Question(`What will pilot do in case of an explosive decompression ?
(OM-A 8.11.5)`, "See Ans.", "Pass", "#page=123");
quiz[194] = new Question(`When should an overweight landing be considered and not be considered ?
(OM-A 8.11.7.2)`, "See Ans.", "Pass", "#page=123");
quiz[195] = new Question(`With the two-engine aircraft, what is the procedure in case of engine failure en route ?
(OM-A 8.12.1.3)`, "See Ans.", "Pass", "#page=124");
quiz[196] = new Question(`Prior entering RVSM airspace, which equipment should be operating normally ?
(OM-A 16.5.2.3, RM 1.6.8.4)`, "See Ans.", "Pass", "#page=124");
quiz[197] = new Question(`If a revised air traffic control clearance cannot be obtained and deviations from track is required
to avoid weather, what are the actions required by pilot in a RVSM ?
(OM-A 16.5.2.8.2) (RM 1.6.8.4)`, "See Ans.", "Pass", "#page=125");
quiz[198] = new Question(`When changing flight levels, what is the maximum distance you are allowed to overshoot or
undershoot ? (OM-A 16.5.2.4), (RM 1.6.8.4)`, "See Ans.", "Pass", "#page=127");
quiz[199] = new Question(`In RVSM airspace, why do we need to note the difference between the primary and standby
altimeters ?
(OM-A 16.5.2.4), (RM 1.6.8.4)`, "See Ans.", "Pass", "#page=128");
quiz[200] = new Question(`How should pilot initiate communications with ATC in order to obtain rapid response for weather
avoidance in RVSM airspace ?
(OM-A 16.5.2.8), (RM 1.5.2.17.4.2)`, "See Ans.", "Pass", "#page=130");
quiz[201] = new Question(`In Asia/Pacific RVSM airspace, an aircraft encounters wake vortex turbulence but clearance for a
flight level, track or speed change is not possible, what should pilot do?
(OM-A 16.5.2.9), (RM 1.5.2.12.3)
`, "See Ans.", "Pass", "#page=130");
quiz[202] = new Question(`Discuss about the Right of Way.
(OM-A 12.13), (RM 1.5.2.6.2.3)
`, "See Ans.", "Pass", "#page=132");
quiz[203] = new Question(`What is the procedures of Pre-Flight Security Check ?
(OM-A 10.3.2.2)
`, "See Ans.", "Pass", "#page=134");
quiz[204] = new Question(`What is the procedures of Post-Flight Security Check ?
(OM-A 10.3.3)`, "See Ans.", "Pass", "#page=135");
quiz[205] = new Question(`What are the purpose of SATVOICE communication ?
(OM-A 8.13.1.3)`, "See Ans.", "Pass", "#page=135");
quiz[206] = new Question(`What is THAI policy about firearms and bodyguards ?
(OM-A 9.16), (OM-A 10.4)`, "See Ans.", "Pass", "#page=136");
quiz[207] = new Question(`Regarding the operation of transponders, what should be set in case of a hijacking,
communication failure and emergency procedure ?
(RM COM 1.7.8.1.1)
`, "See Ans.", "Pass", "#page=137");
quiz[208] = new Question(`What is the definitions of Accident ? (RM 1.9.2)`, "See Ans.", "Pass", "#page=137");
quiz[209] = new Question(`What is the definitions of Incident ?
(RM 1.9.2), (Annex13 Aircraft Accident and Incident Investigation)`, "See Ans.", "Pass", "#page=138");
quiz[210] = new Question(`What are marshaling signals from pilot to signalman ? (RM 1.3.2.3.2)`, "See Ans.", "Pass", "#page=139");
quiz[211] = new Question(`How can runway stripes indicated the runway width ?
(RM 1.3.2.5.5)
`, "See Ans.", "Pass", "#page=141");
quiz[212] = new Question(`When shall indication of heavy wake turbulence be transmitted ?
(RM 1.7.3.7)`, "See Ans.", "Pass", "#page=141");
quiz[213] = new Question(`How do we transmit the number in Radiotelephony? (RM 1.7.1.2.2)`, "See Ans.", "Pass", "#page=141");
quiz[214] = new Question(`State the RNAV phraseology.
(RM 2.1.5.2.1)`, "See Ans.", "Pass", "#page=143");
quiz[215] = new Question(`What is the correct phraseology by pilot after modifying vertical speed to comply with an ACAS
resolution advisory ?
(RM 1.7.3.2.1)
`, "See Ans.", "Pass", "#page=144");
quiz[216] = new Question(`What is the Minimum Enroute Altitude, Minimum Grid ALTITUDE (MGA) and Minimum Terrain
Clearance Altitude (MTCA) ?
(RM 1.5.2.11.1.5, 1.5.2.11.1.7, 1.5.2.11.1.12)`, "See Ans.", "Pass", "#page=144");
quiz[217] = new Question(` How do you know type of RNAV AWY/ATS route with RNP value ?
(RM 1.8.5.5)`, "See Ans.", "Pass", "#page=145");
quiz[218] = new Question(`Can you explain RNAV waypoint symbols ? (RM 1.8.3.1)`, "See Ans.", "Pass", "#page=146");
quiz[219] = new Question(`What is a trend-type landing forecast ?
(RM 1.4.4)`, "See Ans.", "Pass", "#page=146");
quiz[220] = new Question(`Explain the following abbreviations ? (ICAO ANNEX 3, Appendix 5, 2.2.1) (RM 1.4.2 and RM 1.9.2),`, "See Ans.", "Pass", "#page=146");
quiz[221] = new Question(`What is an aerodrome forecast (TAF) ? (RM 1.4.4, RM 1.4.4.1)`, "See Ans.", "Pass", "#page=148");
quiz[222] = new Question(`In oceanic airspace with regards to weather, aircraft performance or malfunction of
pressurization, what are the earliest actions of pilots if ATC clearance can not yet be obtained in
RVSM airspace ?
(RM 1.5.2.17.4.2)`, "See Ans.", "Pass", "#page=150");
quiz[223] = new Question(`The aircraft in oceanic RVSM airspace requiring rapid descent, turn-back or diversion, should
initially leave its assigned route or track by turning right or left for ?
(RM 1.5.2.17.4.1)
`, "See Ans.", "Pass", "#page=151");
quiz[224] = new Question(`What is the missed approach climb gradient as a basis for OCA/OCH/OCL ?
(RM 1.5.5.6.1.5)`, "See Ans.", "Pass", "#page=153");
quiz[225] = new Question(`What are the segments of an instrument approach procedure ?
(RM 1.5.5.6.1)`, "See Ans.", "Pass", "#page=154");
quiz[226] = new Question(`What is the bank angle in a holding or racetrack and during a racetrack procedure, when should
the outbound timing start ?
(RM 1.5.5.7.2.1)`, "See Ans.", "Pass", "#page=155");
quiz[227] = new Question(`What is the buffer area for a holding ? (RM 1.5.5.7.2.6)`, "See Ans.", "Pass", "#page=156");
quiz[228] = new Question(`What should be made for wind effect in a racetrack and reversal procedures ?
(RM 1.5.5.7.2.5)`, "See Ans.", "Pass", "#page=157");
quiz[229] = new Question(`What are the ICAO standard maximum holding speeds ?
(RM 1.5.5.7.2.1)`, "See Ans.", "Pass", "#page=157");
quiz[230] = new Question(`What are the recurrent requirements for a CAT II/III ?
(OM-A 16.2) `, "See Ans.", "Pass", "#page=158");
quiz[231] = new Question(`What is the longitudinal separation minima based on time for aircraft at the same cruising level ?
(RM 1.5.2.12.6.2.2)`, "See Ans.", "Pass", "#page=159");
quiz[232] = new Question(`What is the longitudinal separation minima with Mach number technique based on time ?
(RM 1.5.2.12.6.2.4)`, "See Ans.", "Pass", "#page=160");
quiz[233] = new Question(`What is the longitudinal separation minima based on distance using DME for aircraft at the
same cruising level ?
(RM 1.5.2.12.6.2.3)`, "See Ans.", "Pass", "#page=161");
quiz[234] = new Question(`What is the longitudinal separation minima based on distance using RNAV where RNP is specified
for aircraft at the same cruising level ?
(RM 1.5.2.12.6.2.6)`, "See Ans.", "Pass", "#page=162");
quiz[235] = new Question(`What is the longitudinal separation minima based on distance using RNAV for aircraft at the
same cruising level ?
(RM 1.5.2.12.6.2.6)`, "See Ans.", "Pass", "#page=164");
quiz[236] = new Question(`What is the category of wake turbulence and there separation minima ?
(RM 1.5.2.12.1.1, RM1.5.2.12.1.2)`, "See Ans.", "Pass", "#page=166");
quiz[237] = new Question(` Define “ Vicinity (VC) “ ?
(RM 1.4.2.5.4)`, "See Ans.", "Pass", "#page=168");
quiz[238] = new Question(`What is a go-around versus a missed approach procedure ?
(DOC4444). `, "See Ans.", "Pass", "#page=168");
quiz[239] = new Question(`What do you do in the event of suspected food poisoning ?
(PHM 10.9.2)`, "See Ans.", "Pass", "#page=169");
quiz[240] = new Question(`Explain what kind of passenger not acceptable for travel and procedure for refusal of
passengers? (PHM 3.2)`, "See Ans.", "Pass", "#page=169");
quiz[241] = new Question(`What does wind shear characteristics affect pitch and airspeed ? (OM-A 8.3.8.5.3)`, "See Ans.", "Pass", "#page=171");
quiz[242] = new Question(`What is the Runway Condition Assessment Matrix (RCAM) ? (Lido General 1.4.9.3)`, "See Ans.", "Pass", "#page=175");
quiz[243] = new Question(`What is the Runway Condition Report (RCR).
(Lido General 1.4.9.5)`, "See Ans.", "Pass", "#page=177");
quiz[244] = new Question(`What is purpose of “CABIN SECURE” ?
(CCM 4.2.2.3)
`, "See Ans.", "Pass", "#page=180");
quiz[245] = new Question(`What is the phase that P-I-C use when make a PA during rapid disembarkation ?
(CCM 4.9)`, "See Ans.", "Pass", "#page=180");
quiz[246] = new Question(`After PIC make urgency call to CIC during emergency situation, PIC must brief “TESTS” to CIC.
What is “TESTS” means ?
(CCM 4.2.2.2)`, "See Ans.", "Pass", "#page=181");
quiz[247] = new Question(`What is procedure of “flight deck service” ?
(CCM 2.33)`, "See Ans.", "Pass", "#page=181");
quiz[248] = new Question(`Who is “LIAISON” ?
(CCM 2.32)`, "See Ans.", "Pass", "#page=182");
quiz[249] = new Question(`What need to be done when correcting entry in Aircraft Log ?
(OM-A 14.3.1)`, "See Ans.", "Pass", "#page=182");
quiz[250] = new Question(`Aircraft operation in each RNP airspace shall be equipped with RNAV equipment. what’s RNP
certified for your aircraft type ?
(OM-A 16.1.2)`, "See Ans.", "Pass", "#page=183");
quiz[251] = new Question(`How different between RNAV and RNP ?
(OM-A 16.4.1.4)`, "See Ans.", "Pass", "#page=183");
quiz[252] = new Question(`How does FMS calculate aircraft position ?
(OM-A 8.3.2.3)
`, "See Ans.", "Pass", "#page=184");
quiz[253] = new Question(`What is RNP ?
(OM-A 16.4)`, "See Ans.", "Pass", "#page=185");
quiz[254] = new Question(`What is RNAV system ? (PBN Manual 4th Edition-2013) and what is the benefit of using
RNP/RNAV ?
(PBN Manual 4th edition, RM 1.6.6.2.3)`, "See Ans.", "Pass", "#page=185");
quiz[255] = new Question(`What is the lateral separation between two airways on adjacent RNP-10 AWYs ?
(RM 1.5.2.12.6.1.2)
`, "See Ans.", "Pass", "#page=186");
quiz[256] = new Question(`Which RNP types are implemented for En Route NAV over continental areas, en-route oceanic
NAV or continental area outside radio navaid coverage ? (RM 1.6.6.2.7.2)`, "See Ans.", "Pass", "#page=187");
quiz[257] = new Question(` What is a different between RNAV and RNP spec ?
(FROM DOC 9613_PBN Manual I-(v) [4th edition_2013])`, "See Ans.", "Pass", "#page=188");
quiz[258] = new Question(`What is on-board performance monitoring and alerting system ?
(FROM DOC 9613_PBN MANUAL II-A-2-3) `, "See Ans.", "Pass", "#page=188");
quiz[259] = new Question(`Does RNP10 require on-board monitoring and alerting ?
(FROM DOC 9613_PBN MANUAL I-A-1-6) `, "See Ans.", "Pass", "#page=189");
quiz[260] = new Question(`What type of NAV specifications support oceanic/remote area ?
(FROM DOC 9613_PBN MANUAL I-A-2-3) `, "See Ans.", "Pass", "#page=189");
quiz[261] = new Question(`What type of NAV specifications support continental en-route airspace ?
(FROM DOC 9613_PBN MANUAL I-A-2-3)`, "See Ans.", "Pass", "#page=189");
quiz[262] = new Question(`What type of NAV specification support arrival and departure in terminal airspace ?
(FROM DOC 9613_PBN MANUAL I-A-2-4)
`, "See Ans.", "Pass", "#page=190");
quiz[263] = new Question(`What type of NAV specification support approach concepts ?
(RM 1.6.6.4.1.4)
`, "See Ans.", "Pass", "#page=190");
quiz[264] = new Question(`Describe RNP10 ?
(OM-A 16.4)`, "See Ans.", "Pass", "#page=190");
quiz[265] = new Question(`Describe RNAV5 ?
(OM-A 16.4)`, "See Ans.", "Pass", "#page=191");
quiz[266] = new Question(`Describe RNAV1 ?
(OM-A 16.4)`, "See Ans.", "Pass", "#page=192");
quiz[267] = new Question(`Describe RNAV2 ?
(OM-A 16.4)`, "See Ans.", "Pass", "#page=192");
quiz[268] = new Question(`Describe RNP 4 ?
(OM-A 16.4)`, "See Ans.", "Pass", "#page=193");
quiz[269] = new Question(`Describe RNP 2 ?
(OM-A 16.4, 2.7)
`, "See Ans.", "Pass", "#page=193");
quiz[270] = new Question(`Describe RNP 1 ?
(OM-A 16.4)`, "See Ans.", "Pass", "#page=193");
quiz[271] = new Question(`Why there is no NAV accuracy value for RNP APCH ?
(RM 1.6.6.2.7)`, "See Ans.", "Pass", "#page=194");
quiz[272] = new Question(`APV BARO-NAV (or VNAV approach) provides both lateral and vertical guidance. Why is it defined
as a non-precision approach ?
(RM 1.6.2.1.10.2 and RM 1.6.6.1)`, "See Ans.", "Pass", "#page=194");
quiz[273] = new Question(`During RNP APCH, when do we have to make a missed-approach ?
(FROM PBN MANUAL II-C-5-13 (4th Edition))`, "See Ans.", "Pass", "#page=195");
quiz[274] = new Question(`What is a limitation of cross-track error/deviation for PBN applications ?
(PBN MANUAL II-C-5-13 (4th Edition))`, "See Ans.", "Pass", "#page=195");
quiz[275] = new Question(`When do “PBN CONTINGENCY PROCEDURES” need to be performed ?
(PBN MANUAL II-C-5-13 (4th Edition))`, "See Ans.", "Pass", "#page=196");
quiz[276] = new Question(`What is a “PBN contingency procedures” in Oceanic/Remote airspace ?
(RM 1.5.2.17.4.1)
`, "See Ans.", "Pass", "#page=196");
quiz[277] = new Question(`What is a “PBN contingency procedures” for continental En-route, Terminal and APCH
applications ?
(From PBN Manual II-B-3-21)`, "See Ans.", "Pass", "#page=199");
quiz[278] = new Question(`What are the procedures for RF (Radius to Fix) leg ?
(PBN Manual II-C-App 1-7 (4th Edition))`, "See Ans.", "Pass", "#page=199");
quiz[279] = new Question(`What is RAIM ?
(PBN Manual I-(xviii) (4th Edition))`, "See Ans.", "Pass", "#page=200");
quiz[280] = new Question(`Do all PBN applications require current Navigation database?
(PBN Manual II-B-2-13 (4th Edition))`, "See Ans.", "Pass", "#page=200");
quiz[281] = new Question(`What time does the Navigation database expire ?
(RM 1.1.9.4)`, "See Ans.", "Pass", "#page=200");
quiz[282] = new Question(`What is “SLOP” ?
(RM 1.5.2.12.3)`, "See Ans.", "Pass", "#page=201");
quiz[283] = new Question(`If both GPS receivers fail, what PBN applications will be defected ?
(PBN Manual II-B-1-12 (4th Edition))`, "See Ans.", "Pass", "#page=202");
quiz[284] = new Question(` How can we choose between CPDLC and voice communication ?
(GOLD 2; 5-2, 5-3)`, "See Ans.", "Pass", "#page=203");
quiz[285] = new Question(`When should we log on CPDLC before entry into data link airspace ?
(GOLD 2; 5-7)`, "See Ans.", "Pass", "#page=204");
quiz[286] = new Question(`What should we do if the CPDLC connection does not automatically transferred after crossing the
FIR boundary ?
(GOLD 2; 5-26)
`, "See Ans.", "Pass", "#page=205");
quiz[287] = new Question(`How should we respond to a CPDLC uplink message ?
(GOLD2; 5-2, 5-10)`, "See Ans.", "Pass", "#page=205");
quiz[288] = new Question(`How much time can we take before responding to a CPDLC uplink message ?
(GOLD2 5-10)`, "See Ans.", "Pass", "#page=205");
quiz[289] = new Question(`.If during the weather deviation, we are cleared to proceed direct to a way point. Do we need to
report “BACK ON ROUTE” via CPDLC ?
(GOLD2 5-23)
`, "See Ans.", "Pass", "#page=206");
quiz[290] = new Question(` After being cleared to proceed direct to a waypoint, how can we request a weather deviation via
CPDLC ?
(GOLD2 5-19, 5-23)`, "See Ans.", "Pass", "#page=207");
quiz[291] = new Question(`How do we use CPDLC’s “FREE TEXT” ?
(GOLD 2; 5-15) `, "See Ans.", "Pass", "#page=208");
quiz[292] = new Question(`What is “FLIGHT ID” ?
(DOC 9869; PBCS 2th Edition)`, "See Ans.", "Pass", "#page=208");
quiz[293] = new Question(`What happens when we turn ADS EMERGENCY ON ?
(GOLD 2; 2-47/48)`, "See Ans.", "Pass", "#page=208");
quiz[294] = new Question(`What is Performance-based Communication and Surveillance (PBCS) concept ? (Lido General 1.6.7)`, "See Ans.", "Pass", "#page=209");


var randomQuestion;
var answers = [];
var currentScore = 0;
let page;

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,See,Pass,Page) {
    this.question = question;
    this.See = See;
    this.Pass = Pass;
    this.Page = Page;
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //getQuestion
  page = quiz[randomNumber].Page;
  answers = [randomQuestion.See, randomQuestion.Pass];
  
  document.getElementById("question").innerHTML= `<h3>${randomQuestion.question}</h3>`;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];

}

function answerA_clicked() {
  window.open(`OPC-Questionnaires-Issue18-16OCT2021.pdf${page}`, "_blank");
  	// var pdf = document.getElementById("pdf");
    // console.log(pdf.innerHTML);
    // pdf.innerHTML="";
    // pdf.innerHTML= `<a href="OPC-Questionnaires-Issue18-16OCT2021.pdf${page}">Open PDF</a>`
    // pdf.hidden = false;
}

function answerB_clicked() {
  var pdf = document.getElementById("pdf");
  btnProvideQuestion();
  pdf.hidden = true;
}


