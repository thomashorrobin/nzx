class HomeController < ApplicationController
  def index
    @parties = Party.find(:all)
    @parties.each do |party|
        party.TotalSeat = party.PartyVoteSeatsAllocated + party.ElectorateSeatsAllocated
    end
  end

  def callapi
    party = Party.find(7)
    p party
  end
end
