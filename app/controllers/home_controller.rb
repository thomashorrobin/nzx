class HomeController < ApplicationController
  def index
    # byebug
    p "got here"
    @parties = Party.find(:all)
  end

  def callapi
    party = Party.find(7)
    p party
  end
end
