<?php

namespace Tests\Unit\Models\Company;

use Tests\TestCase;
use App\Models\Company\CompanyUsageHistory;
use App\Models\Company\CompanyUsageHistoryDetails;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CompanyUsageHistoryTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_belongs_to_a_company(): void
    {
        $usage = CompanyUsageHistory::factory()->create([]);
        $this->assertTrue($usage->company()->exists());
    }

    /** @test */
    public function it_has_many_details(): void
    {
        $usage = CompanyUsageHistory::factory()->create([]);
        CompanyUsageHistoryDetails::factory()->count(2)->create([
            'company_usage_history_id' => $usage->id,
        ]);

        $this->assertTrue($usage->details()->exists());
    }
}