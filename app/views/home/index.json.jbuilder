json.array!(@parties) do |party|
  json.extract! party, :id, :PartyName, :PartyVoteSeatsAllocated, :PartyVotes, :PartyVotePercentageWon, :PartyVoteCadidatesCount, :ElectorateSeatsAllocated, :ElectorateVotes, :ElectoratePercentageWon, :ElectorateCadidatesCount, :TotalSeat
end