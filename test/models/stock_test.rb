require 'test_helper'

class StockTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test ".find_or_build_by" do
    let(:ticker) { "value" }
    subject { Stock.find_or_build_by(ticker) }

    context "when stock exists in the database" do
      before do
        Stock.create!(ticker: ticker)
      end

      it "returns the existing record from the database" do
        stock = subject
        stock.ticker = ticker
        expect(stock).to be_persisted
      end
    end

    context "when stock doesn't exist in the database" do
      it "builds a stock record" do
        stock = subject
        stock.ticker = ticker
        expect(stock).to_not be_persisted
      end
    end
  end


end
